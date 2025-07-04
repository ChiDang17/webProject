// package com.store.backend.controllerTests;

// import java.time.LocalDateTime;
// import java.util.List;

// import static org.junit.jupiter.api.Assertions.assertEquals;
// import org.junit.jupiter.api.BeforeEach;
// import org.junit.jupiter.api.Test;
// import static org.mockito.ArgumentMatchers.any;
// import org.mockito.InjectMocks;
// import org.mockito.Mock;
// import static org.mockito.Mockito.doNothing;
// import static org.mockito.Mockito.verify;
// import static org.mockito.Mockito.when;
// import org.mockito.MockitoAnnotations;

// import com.store.backend.controller.OrdersController;
// import com.store.backend.model.Orders;
// import com.store.backend.service.OrdersService;

// public class OrdersControllerTests {
//     @Mock
//     private OrdersService ordersService;

//     @InjectMocks
//     private OrdersController ordersController;

//     @BeforeEach
//     public void clearDatabase() {
//         MockitoAnnotations.openMocks(this);
//     }

//     @Test
//     public void testCreateOrder() {
//         Orders order = new Orders("123", 4, LocalDateTime.now(), 2);

//         when(ordersService.createOrder(order)).thenReturn(order);
        
//         Orders result = ordersController.createOrder(order);

//         assertEquals(123, result.getCustomerID());
//     }

//     @Test
//     public void testGetOrderByID() {
//         Orders order = new Orders("123", 4, LocalDateTime.now(), 2);
//         int id = 1;

//         when(ordersService.getOrderByID(id)).thenReturn(order);

//         Orders result = ordersController.getOrderByID(id);

//         assertEquals(4, result.getProductID());
//     }

//     @Test
//     public void testGetAllOrders() {
//         Orders order1 = new Orders("123", 4, LocalDateTime.now(), 2);
//         Orders order2 = new Orders("456", 3, LocalDateTime.now(), 3);

//         when(ordersService.getAllOrders()).thenReturn(List.of(order1, order2));

//         List<Orders> list = ordersController.getAllOrders();
//         assertEquals(2, list.size());
//     }

//     @Test
//     public void testUpdateOrder() {
//         int id = 1;
//         Orders initial = new Orders("123", 4, LocalDateTime.now(), 2);
//         Orders updated = new Orders("456", 4, LocalDateTime.now(), 2);

//         when(ordersService.getOrderByID(id)).thenReturn(initial);
//         when(ordersService.updateOrder(any(Orders.class))).thenReturn(updated);

//         Orders result = ordersController.updateOrder(id, updated);
        
//         assertEquals(456, result.getCustomerID());
//     }

//     @Test
//     public void testDeleteOrder() {
//         int id = 1;

//         doNothing().when(ordersService).deleteOrder(id);
        
//         ordersService.deleteOrder(id);

//         verify(ordersService).deleteOrder(id);
//     }
// }
