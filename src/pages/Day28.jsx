import React from 'react'
import { motion } from 'framer-motion'
import { Input, Button, Radio, Checkbox, Icon, Textarea, Badge } from '../components/ui'
import { HiChat, HiOutlineArrowSmRight, HiOutlinePaperAirplane, HiOutlineChat, HiOutlineFlag, HiOutlinePhone, HiOutlineOfficeBuilding, HiOutlineUser } from "react-icons/hi"
import { SiLinkedin, SiInstagram, SiFacebook, SiX } from "react-icons/si"

const Day28 = () => {

  const Link = ({ children, styles }) => {
    return (
      <a className={`${styles} md:text-base text-sm underline text-indigo-400 cursor-pointer`}>
        {children}
      </a>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='grid lg:grid-cols-2 grid-cols-1 md:gap-12 gap-4 lg:min-h-screen'>
        {/* Contact Information */}
        <div className='md:order-1 order-2 flex flex-col justify-between md:gap-0 gap-12 md:py-12 py-4 md:pl-12 pl-4 md:pr-0 pr-4'>
          {/* Start */}
          <div className='space-y-3'>
            <Badge text='Reach out to us!' variant='main' styles='flex-row-reverse'>
              <HiChat className='size-4' />
            </Badge>
            <h1>Got projects? We've got the skills, <br /> let's team up!</h1>
            <p className='max-w-2xl'> Whether you're looking for expert guidance, have a vision in mind, or need a custom web solution that fits to your needs, we’re here to help! Let’s collaborate to turn your ideas into reality, just share your thoughts.</p>
          </div>
          {/* Middle */}
          <div className='grid md:grid-cols-2 grid-cols-1 gap-3'>
            {[
              { icon: HiOutlineChat, title: 'Chat with us!', desc: 'Need help? Our friendly team is just a message away.', link: 'chatsupport@fm.com' },
              { icon: HiOutlineFlag, title: 'Visit our office!', desc: 'Drop by and say hello to our office—we’d love to meet you!', link: '100 Smith Street, Manila, PH' },
              { icon: HiOutlinePhone, title: 'Give us a call!', desc: 'Available Monday to Friday, 8 AM – 5 PM.', link: '+1 92836 192' },
            ].map((item, index) => (
              <div className='space-y-2 border border-gray-800 rounded-2xl p-4' key={index}>
                <div className='flex items-center gap-2.5'>
                  <Icon styles='size-10'>
                    <item.icon className='size-6 text-indigo-500' />
                  </Icon>
                  <h4>{item.title}</h4>
                </div>
                <div>
                  <p>{item.desc}</p>
                  <Link styles='flex items-center'>
                    {item.link}
                    <HiOutlineArrowSmRight className='size-5' />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {/* End */}
          <div className='space-x-2'>
            {[
              { icon: SiLinkedin },
              { icon: SiX },
              { icon: SiInstagram },
              { icon: SiFacebook },
            ].map((item, index) => (
              <a className='group size-8 rounded-lg inline-flex items-center justify-center hover:bg-gray-800 transition duration-300 ease-in-out cursor-pointer' key={index}>
                <item.icon className='size-4 group-hover:text-indigo-500 text-gray-300 transition duration-300 ease-in-out' />
              </a>
            ))}
          </div>
        </div>
        {/* Contact Form */}
        <div className='md:order-2 order-1 flex flex-col justify-center w-full md:py-12 py-4 md:pr-12 pr-4 md:pl-0 pl-4'>
          <div className='space-y-8'>
            {/* Header */}
            <div>
              <h2>Let's chat!</h2>
              <p>Kindly complete this form to discuss your concerns in detail.</p>
            </div>
            {/* Form */}
            <form className='grid md:grid-cols-2 grid-cols-1 gap-3'>
              {/* Client Type */}
              <div className='space-y-2 col-span-full'>
                <div className='flex items-start gap-1'>
                  <p>Who are you signing up as?</p>
                  <span className='text-red-400'>*</span>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-3'>
                  {/* Radio 1 */}
                  <Radio
                    variant='group-radio'
                    name='center-end-radio'
                    value='center-end-radio-1'
                    id='center-end-radio-1'
                    styles='rounded-xl w-full items-center'
                  >
                    <div className='flex items-start gap-3'>
                      <Icon styles='size-12 shrink-0'>
                        <HiOutlineUser className='size-6 text-gray-300' />
                      </Icon>
                      <div>
                        <p className='text-gray-300 font-bold'>Individual</p>
                        <p>For freelancers and personal projects.</p>
                      </div>
                    </div>
                  </Radio>
                  {/* Radio 2 */}
                  <Radio
                    variant='group-radio'
                    name='center-end-radio'
                    value='center-end-radio-2'
                    id='center-end-radio-2'
                    styles='rounded-xl w-full items-center'
                  >
                    <div className='flex items-start gap-3'>
                      <Icon styles='size-12 shrink-0'>
                        <HiOutlineOfficeBuilding className='size-6 text-gray-300' />
                      </Icon>
                      <div>
                        <p className='text-gray-300 font-bold'>Business</p>
                        <p>For startups and growing enterprises.</p>
                      </div>
                    </div>
                  </Radio>
                </div>
              </div>
              {/* Complete Name */}
              <Input
                id="complete-name"
                name="complete-name"
                type="text"
                label="Complete Name"
                placeholder="E.g John Doe"
                required
                styles="w-auto"
              />
              {/* Email Address */}
              <Input
                id="email"
                name="email"
                type="email"
                label="Email Address"
                placeholder="E.g sample@fm.com"
                required
                styles="w-auto"
              />
              {/* I am interested in: */}
              <div className='col-span-full space-y-2'>
                <div className='flex items-start gap-1'>
                  <p>I am interested in:</p>
                  <span className='text-red-400'>*</span>
                </div>
                <div className='flex flex-wrap items-center gap-2'>
                  {/* Checkbox 1 */}
                  <Checkbox
                    variant='group-checkbox'
                    name='interest'
                    value='web development'
                    id='web-development'
                    styles='w-auto items-center'
                    checkboxStyles='hidden'
                  >
                    <p>Web Development</p>
                  </Checkbox>
                  {/* Checkbox 2 */}
                  <Checkbox
                    variant='group-checkbox'
                    name='interest'
                    value='mobile development'
                    id='mobile-development'
                    styles='w-auto items-center'
                    checkboxStyles='hidden'
                  >
                    <p>Mobile Development</p>
                  </Checkbox>
                  {/* Checkbox 3 */}
                  <Checkbox
                    variant='group-checkbox'
                    name='interest'
                    value='desktop development'
                    id='desktop-development'
                    styles='w-auto items-center'
                    checkboxStyles='hidden'
                  >
                    <p>Desktop Development</p>
                  </Checkbox>
                  {/* Checkbox 4 */}
                  <Checkbox
                    variant='group-checkbox'
                    name='interest'
                    value='ui/ux design'
                    id='ui-ux-design'
                    styles='w-auto items-center'
                    checkboxStyles='hidden'
                  >
                    <p>UI/UX Design</p>
                  </Checkbox>
                  {/* Checkbox 5 */}
                  <Checkbox
                    variant='group-checkbox'
                    name='interest'
                    value='graphic design'
                    id='graphic-design'
                    styles='w-auto items-center'
                    checkboxStyles='hidden'
                  >
                    <p>Graphic Design</p>
                  </Checkbox>
                  {/* Checkbox 6 */}
                  <Checkbox
                    variant='group-checkbox'
                    name='interest'
                    value='others'
                    id='others'
                    styles='w-auto items-center'
                    checkboxStyles='hidden'
                  >
                    <p>Others</p>
                  </Checkbox>
                </div>
              </div>
              {/* Message */}
              <Textarea
                id="message"
                rows='2'
                label="Your Message:"
                placeholder="E.g I'd like to request a website and app."
                required
                styles="col-span-full"
              />
              {/* Terms Agreement and Privacy Policy */}
              <Checkbox
                variant='default'
                name='default-checkbox'
                value='default-checkbox-1'
                id='default-checkbox-1'
                styles='col-span-full'
              >
                <label htmlFor='default-checkbox-1' className='text-gray-300'>I agree to the <Link>Terms and Conditions</Link> and <Link>Privacy Policy.</Link></label>
              </Checkbox>
              {/* Submit Button */}
              <div className='col-span-full mt-2'>
                <Button label={'Submit Inquiry'} variant='primary'>
                  <HiOutlinePaperAirplane className='size-5 rotate-90' />
                </Button>
              </div>
            </form>
            {/* Note */}
            <div className='p-4 rounded-xl bg-gray-800/30 border border-gray-800'>
              <p><strong>Note:</strong> After you submit this form, we'll reach out to you via email to discuss your inquiry or concern in more detail. we'll make sure to get back to you as soon as possible, so we can start addressing your needs right away!</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Day28
