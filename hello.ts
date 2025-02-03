export const handler = async (event: any): Promise<any> => {
    console.log('Event received:', event);  // Log event (optional)
  
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Hello, World!' }),
    };
  };