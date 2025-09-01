  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.50](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-750.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: RFC and ABAP Channels in Release 7.50, ABENNEWS-750-RFC, 757%0D%0A%0D%0AError:%0D%0A%
0D%0A%0D%0A%0D%0ASuggestion for improvement:)

RFC and ABAP Channels in Release 7.50

[1\. Dynamic Destinations in RFC](#!ABAP_MODIFICATION_1@1@)
[2\. Point-to-Point Communication for AMC](#!ABAP_MODIFICATION_2@2@)
[3\. Enhancements for APC](#!ABAP_MODIFICATION_3@3@)
[4\. Forbidden Accesses for APC](#!ABAP_MODIFICATION_4@4@)

Modification 1   

Dynamic Destinations in RFC

The methods of the class CL\_DYNAMIC\_DESTINATION are used to manage dynamic [RFC destinations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_destination.htm) in Release 7.50 and higher. In particular, the method CREATE\_RFC\_DESTINATION makes it possible to create a dynamic destination, which can be used in the current sessions for RFCs.

Modification 2   

Point-to-Point Communication for AMC

Alongside the general publish-and-subscribe mechanism, a point-to-point communication option was introduced for the [ABAP messaging channels (AMC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamc.htm). Here, a sender object addresses precisely one receiver session. The send action can be either synchronous or asynchronous. This is done using the new factory method CREATE\_MESSAGE\_PRODUCER\_BY\_ID of the class CL\_AMC\_CHANNEL\_MANAGER. The ID of a receiver session is provided by the method GET\_CONSUMER\_SESSION\_ID of the same class.

Modification 3   

Enhancements for APC

The framework for [ABAP channels](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenapc.htm) was expanded as follows:

-   Alongside communication using the WebSocket protocol, communication using TCP sockets is now also possible.
-   An AS ABAP used as an APC server can now also stateful. Until now, only stateless servers were possible.
-   An AS ABAP as operate as an APC client.
-   Clients known as detached clients make it possible to open an APC connection to a stateless or stateful APC server and then detach it again immediately so that it can be accessed using attached clients.
-   A connection handle can be used to access existing APC connections across the entire system.
-   A [non-blocking](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenapc_non_blocking_model.htm) model was introduced for stateful APC applications.
-   The class CL\_APC\_TIMER\_MANAGER creates timer managers that can be accessed using the interface IF\_APC\_TIMER\_MANAGER. A timer manager makes it possible to start and stop a timer in stateful APC applications in which the statement WAIT is not allowed. The interface IF\_APC\_TIMER\_HANDLER is used to handle timer events.

See also the ABAP Channels documentation in SAP Help Portal.

Modification 4   

Forbidden Accesses for APC

Up to now, any repeated attempts to bind a push channel to a bound messaging channel or any attempts to remove a nonexistent binding were ignored. From Release 7.50, both situations raise an exception.