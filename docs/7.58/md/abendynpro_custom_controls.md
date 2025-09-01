  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros.htm) →  [dynpro - Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpro_elements.htm) →  [dynpro - Screen Layout and Screen Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dynpros_screen.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20dynpro%20-%20Custom%20Controls%2C%20ABENDYNPRO_CUSTOM_CONTROLS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

dynpro - Custom Controls

A custom control is a rectangular area on the screen of a dynpro. They are created in the [Screen Painter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenscreen_painter_glosry.htm "Glossary Entry") and, like all other screen objects, have a unique name. Custom controls are used to embed controls in these areas. Controls are software components of the presentation server. Depending on the SAP GUI used, these components are either ActiveX controls or JavaBeans. They allow certain tasks, such as editing texts, to be performed locally on the presentation server. The control is driven by the application logic, which continues to run on the application server.

SAP Control Framework

The controls on the presentation server and the ABAP application programs on the application server communicate using the [SAP Control Framework](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencontrol_framework_glosry.htm "Glossary Entry") ([Help Portal Documentation](https://help.sap.com/docs/ABAP_PLATFORM_NEW/70396d7dec4c4f19b9ca3b2e47559d12/4d70c27fa9e24cb2e10000000a42189c)). The SAP Control Framework contains global classes that can be found in the [class library](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_library_glosry.htm "Glossary Entry") under Basis -> Frontend Services. These classes encapsulate the communication between the application server and presentation server, which is implemented using [Remote Function Call](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenremote_function_call_glosry.htm "Glossary Entry").

All application controls are encapsulated in a global class. The classes for controls shipped by SAP can be found, for example, in the class library under Basis -> Frontend Services, or Basis -> Component Integration. Programs that use controls on a screen of a dynpro work exclusively with the methods and events of these classes.

Container Controls

Before a custom control on a screen can be used, it must be assigned a [container control](https://help.sap.com/docs/ABAP_PLATFORM_NEW/70396d7dec4c4f19b9ca3b2e47559d12/4d3eb257a9bf2304e10000000a15822b). Container controls are instances of special global classes from SAP Control Framework. The global class for custom controls is called CL\_GUI\_CUSTOM\_CONTAINER. To associate a custom control with a container control, the custom control name is passed to the constructor of the container control when it is instantiated.

As well as using custom containers, controls can be associated with dynpros using a docking container from the class CL\_GUI\_DOCKING\_CONTAINER. Docking containers do not embed the control in a dynpro. Instead, they attach it to one of its four edges. Containers can also be nested. For example, splitter controls from the classes CL\_GUI\_EASY\_SPLITTER\_CONTAINER or CL\_GUI\_SPLITTER\_CONTAINER can be associated with other containers. This makes it possible to split a custom control or docking control into more than one window, so enabling more than one standalone control to be used in a single container.

![Figure](dynpro_container_control.png)

Application Controls

An instance in the ABAP program must also be created for the actual application control to be displayed in the custom control area, for example a TextEdit control from the class CL\_GUI\_TEXTEDIT or a tree control from the class CL\_GUI\_SIMPLE\_TREE. When the control is instantiated, a reference to the required container control is passed to the parameter PARENT of the constructor. The container may be an instance of the class CL\_GUI\_CUSTOM\_CONTAINER, but can also be an instance of one of the other containers.

Control Methods

For information about control methods and their documentation, see the class definitions in the [Class Builder](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_builder_glosry.htm "Glossary Entry"). To minimize the network load between the application and presentation servers, method calls are buffered in the automation queue before being sent to the presentation server at defined synchronization points. One of the automatic synchronization points is the end of PBO processing. A synchronization point can be forced in the program by using non-buffered method calls or by calling the static method FLUSH from the global class CL\_GUI\_CFW in the SAP Control Framework.

Control Events

Unlike dynpros, where user interaction triggers the PAI event and control is passed to the application server, user interaction on controls is not automatically passed back to the application server. If an event is to be passed back to the application server, it must be registered in the program using the special method SET\_REGISTERED\_EVENTS from the class of the control. For a list of the events that can be registered for each control, see to its wrapper class in Class Builder. Two kinds of event handler can be defined using SET\_REGISTERED\_EVENTS:

-   Handling as system events (default)
    -   The event is passed to the application server, but does not trigger the PAI. If an event handler method is registered in the associated ABAP program for the event (using the statement [SET HANDLER](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_handler.htm)), this method is executed on the application server.
    -   Within the event handler method, the static method SET\_NEW\_OK\_CODE of the global class CL\_GUI\_CFW is used to set a function code and trigger the PAI event in a program-driven way and pass any function code. After PAI processing, the PBO event of the next screen is triggered.
    -   The advantage of using this technique is that the event handler method is executed automatically and there are no conflicts with the automatic input checks associated with the dynpro. One drawback, however, is that the content of the remaining dynpro fields are not transported to the program automatically, which means that obsolete values could appear on the next screen. A workaround for this is to use the SET\_NEW\_OK\_CODE method to trigger a field transport after the event handler has finished.
        ![Figure](dynpro_system_event.png)
-   Handling as application events
    -   The event is passed to the application server and triggers the PAI. The function code passed contains an internal identifier. This does not have to be evaluated in the ABAP program. Instead, if the event is to be handled, a method call must be included in a PAI dialog module for the static method DISPATCH of the global class CL\_GUI\_CFW. If an event handler method is defined in the ABAP program for the event (using the statement SET HANDLER), the DISPATCH method calls it. After the event is handled, control is passed to the PAI event after the DISPATCH method call and PAI processing continues.
    -   The advantage of this is that the point at which the event is handled can be specified and the content of the dynpro fields are transported to the application server beforehand. One drawback, however, is that this kind of event handling can produce conflicts with the automatic input checks on the dynpro, causing events to be lost.
        ![Figure](dynpro_system_event.png)

Further Information

-   [SAP Control Framework](https://help.sap.com/docs/ABAP_PLATFORM_NEW/70396d7dec4c4f19b9ca3b2e47559d12/4d70c27fa9e24cb2e10000000a42189c)
-   [Container control](https://help.sap.com/docs/ABAP_PLATFORM_NEW/70396d7dec4c4f19b9ca3b2e47559d12/4d3eb257a9bf2304e10000000a15822b)

Executable Examples

-   [dynpro - CFW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_cfw_abexa.htm)
-   [dynpro - CFW Events](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_custom_control_abexa.htm)