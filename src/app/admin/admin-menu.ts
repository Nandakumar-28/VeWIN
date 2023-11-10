import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  // {
  //   title:'Nanda Kumar'
  // },
  {
    title: 'Users List',
    icon: 'list-outline',
    link: '/admin/users',
    home: true,
  },
  {
    title: 'Registration Approval',
    icon: 'checkmark-circle-outline',
    link: '/admin/register',
    home: true,
  },
  {
    title: 'Announcement',
    icon: 'volume-up-outline',
    link: '/admin/announcement',
    home: true,
  },
  {
    title: 'Best Performer',
    icon: 'award-outline',
    link: '/admin/bestperformer',
    home: true,
  },

  // {
  //   title: 'Payment',
  //   icon: 'credit-card-outline',
  //   link: '/admin/payments',
  //   home: true,
  // },
  {
    title: 'Banner',
    icon: 'image-outline',
    link: '/admin/banner',
    home: true,
  }


]