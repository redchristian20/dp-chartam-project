import React from 'react'
import Form from 'react'
import * as motion from "motion/react-client"
const ContactPage = () => {
  return (
    <div>
      <section class="bg-gray-50 dark:bg-gray-900">
          <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
              <div class="flex flex-col justify-center">
                  <iframe loading="lazy"
                      src="https://maps.google.com/maps?q=GSMA%20Bldg.%20Gov.%20Luna%20cor.%20Ortega%20Sts.%20Brgy%204%20City%20of%20San%20Fernando&#038;t=m&#038;z=15&#038;output=embed&#038;iwloc=near"
                      title="GSMA Bldg. Gov. Luna cor. Ortega Sts. Brgy 4 City of San Fernando"
                      aria-label="GSMA Bldg. Gov. Luna cor. Ortega Sts. Brgy 4 City of San Fernando">
                  </iframe>
              </div>
              <div>
                  <div class="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
                      <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
                          Contact us:
                      </h2>
                      <form class="mt-8 space-y-6" action="#">
                        <div class="grid gap-6 mb-6 md:grid-cols-2">
                      <div>
                          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                          <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                      </div>
                      <div>
                          <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                          <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                      </div> 
                      
                  </div>
                  <div class="mb-6">
                      <label for="phone" class="block m-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                      <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                      <label for="email" class="block m-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                      <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                  </div> 
                          <div class="flex items-start">
                              <div class="flex items-center h-5">
                                  <input id="remember" aria-describedby="remember" name="remember" type="checkbox" class="w-4 h-4 border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" required />
                              </div>
                              <div class="ms-3 text-sm">
                              <label for="remember" class="font-medium text-gray-500 dark:text-gray-400">(SMS Opt-in Consent)I agree</label>
                              </div>
                          </div>
                          <div class="text-sm font-medium text-gray-900 dark:text-white">
                              <p>
                                By checking this box, I agree to receive SMS messages about Information from Alchemy Online Services at the phone number provided above. The SMS frequency may vary. Data rates may apply. Text HELP to 1-123-456-7899 for assistance. Reply STOP to opt out of receiving SMS messages
                              </p>
                          </div>
                          <button type="submit" class="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send Message</button>
                      </form>
                  </div>
              </div>
          </div>
      </section>
    </div>
  )
}

export default ContactPage