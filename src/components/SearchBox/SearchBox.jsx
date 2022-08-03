import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import {
  Input,
  SearchbarStyle,
  SearchButton,
  SearchForm,
} from './SearchBox.styled';
import { BiSearch } from 'react-icons/bi';

const initialValues = {
  imagesName: '',
};

export const SearchBox = ({ onChange }) => {
  const handleSubmit = ({ imagesName }, { resetForm }) => {
    if (imagesName.trim() === '') {
      toast.warn('Enter something', {
        position: 'top-center',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      resetForm();
      return;
    }
    onChange(imagesName);
  };

  return (
    <SearchbarStyle>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <SearchForm>
          <Input type="text" name="imagesName" />
          <SearchButton type="submit">
            <BiSearch size={16} />
          </SearchButton>
        </SearchForm>
      </Formik>
    </SearchbarStyle>
  );
};

SearchBox.propTypes = {
  onChange: PropTypes.func.isRequired,
};
