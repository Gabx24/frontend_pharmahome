import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
 import './Footer.css' ;

export default function Footer() {
  return (
    <MDBFooter className='text-center Footer' color='white' bgColor='#355764'>
      <MDBContainer className='p-4'>
        {/* <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section> */}

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our Newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start='12'>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p>
            Get to know updates in the field of medicine and know how often our stores are stocked.
          </p>
        </section>

        <section className=''>
          <MDBRow>

          <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                PharmaHome
              </h6>
              <p>
                Your favourite online pharmacy. We offer same day delivery and your health is our priority. 
              </p>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Quick links</h5>


              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    About Us
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Careers
                  </a>
                </li>
                {/* <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li> */}
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Services</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Delivery
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Purchase
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Consult Specialist
                  </a>
                </li>
                {/* <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li> */}
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Social Media</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Twitter
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Linkedin                  </a>
                </li>
                {/* <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li> */}
              </ul>
            </MDBCol>


          </MDBRow>
        </section>
      </MDBContainer>

      {/* <div className='text-center p-3' >
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
         MDBootstrap.com
        </a>
      </div> */}
    </MDBFooter>
  );
}