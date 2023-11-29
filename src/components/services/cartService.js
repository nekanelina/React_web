// services/cartService.js

export const addToCart = async (productId) => {
  try {
    const response = await fetch('http://localhost:4000/api/user/add-to-cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify({ productId }),
    });

    if (!response.ok) {
      throw new Error('Failed to add item to the cart');
    }

    const data = await response.json();
    console.log('Item added to the cart:', data);
  } catch (error) {
    console.error('Error adding item to the cart:', error);
  }
};


export const removeFromCart = async (productId) => {
  try {
    const response = await fetch(`http://localhost:4000/api/user/remove-from-cart/${productId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to remove item from the cart');
    }

    const data = await response.json();
    console.log('Item removed from the cart:', data);
  } catch (error) {
    console.error('Error removing item from the cart:', error);
  }
};
  