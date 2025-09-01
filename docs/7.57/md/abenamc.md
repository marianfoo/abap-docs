  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [ABAP Channels](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_channels.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Messaging Channels \(AMC\), ABENAMC, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0A
Suggestion for improvement:)

ABAP Messaging Channels (AMC)

ABAP Messaging Channels (AMC) are a method of communication between ABAP programs using messages. Using a publish and subscribe mechanism, messages can be exchanged between any AS ABAP programs, which allows communication between different user sessions and AS instances. Messages can be implemented as data objects with specific data types. Messages that can be sent and received are:

-   Text strings
-   Byte strings
-   Content that is serialized in accordance with fixed protocols. Helper classes are available for serializations and deserializations.

ABAP messaging channels are implemented as repository objects that can be accessed in sender and receiver programs using an interface-based and class-based programming interface (API). The classes and interfaces of the API use the naming convention CL\_AMC\_... and IF\_AMC\_... respectively. Communication between different AS instances takes place using the [message server](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmessage_server_glosry.htm "Glossary Entry").

-   [Messaging Channels as Repository Objects](#@@ITOC@@ABENAMC_1)
-   [Sending AMC Messages](#@@ITOC@@ABENAMC_2)
-   [Receiving AMC Messages](#@@ITOC@@ABENAMC_3)
-   [Point-to-Point Communication](#@@ITOC@@ABENAMC_4)
-   [AMC - Security](#@@ITOC@@ABENAMC_5)
-   [AMC - Exceptions](#@@ITOC@@ABENAMC_6)
-   [AMC - Test and Analysis](#@@ITOC@@ABENAMC_7)
-   [More Information](#@@ITOC@@ABENAMC_8)

Hints

-   Any data object can be sent by being serialized in a suitable way by the sender and deserialized by the receiver. Possible formats are [XML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml.htm) or [JSON](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_json.htm) in strings or SAP's own [Push Channel Protocol](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpush_channel_protocol_glosry.htm "Glossary Entry").
-   The sendable messages are currently subject to a standard length restriction of approximately 1 MB. Character strings are converted to the [UTF-8](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenutf8_glosry.htm "Glossary Entry") format. The limit can be increased by changing the profile parameter rdisp/long\_messages/max\_length.

Messaging Channels as Repository Objects   

An [ABAP messaging channel](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_messaging_channel_glosry.htm "Glossary Entry") defined as a [repository object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrepository_object_glosry.htm "Glossary Entry") must exist for each AMC communication. An ABAP messaging channel like this can be created in the [Repository Browser](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrepository_browser_glosry.htm "Glossary Entry") in the ABAP Workbench by opening the context menu of a package and choosing Connectivity. The Connectivity Browser of the Object Navigator provides another access option. To open the Object Navigator for AMCs, the transaction SAMC can be used.

An ABAP messaging channel is identified by its assignment to an application and by its name. The name must start with a forward slash character (/) and is not case-sensitive. The following properties can be defined for an ABAP messaging channel:

-   Message type
    
    The message type determines the data type of the data objects that can be sent and received as messaging channels messages. Currently there are
    
    -   TEXT for text strings
    -   BINARY for byte strings
    -   PCP for SAP's own [Push Channel Protocol (PCP)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpush_channel_protocol_glosry.htm "Glossary Entry")
-   Scope
    
    The scope defines who can receive a message sent using this messaging channel. Current scopes are
    
    -   System
    
    All programs of all user sessions in the current AS ABAP can receive messages.
    
    -   Client
    
    All programs of user sessions in the current AS ABAP logged on with the same [client ID](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclient_identifier_glosry.htm "Glossary Entry") as the sender program can receive messages.
    
    -   User
    
    Only programs of user sessions in the current AS ABAP logged on with the same [user name](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuser_name_glosry.htm "Glossary Entry") and the same [client ID](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclient_identifier_glosry.htm "Glossary Entry") as the sender program can receive messages.
    
    No other restrictions apply apart from these settings. More specifically, it is possible to send and receive messages between different [AS instances](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_instance_glosry.htm "Glossary Entry").
    
-   Authorized programs
    
    Each program that is authorized to send or receive messages using the messaging channel or a predecessor program in the current [call sequence](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencall_sequence_glosry.htm "Glossary Entry") must be specified with the appropriate activity in an include list. Possible activities are:
    
    -   Send, which authorizes the program to send AMC messages
    -   Receive, which authorizes the program to receive AMC messages
    -   Bind APC WebSocket as consumer, which authorizes the program (usually the class pool of an [APC handler class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenapc.htm)) to bind its WebSocket connection to an ABAP messaging channel. This makes the [APC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenapc_glosry.htm "Glossary Entry") connection partners (such as Web browsers) into AMC consumers.

Example

See the messaging channels /demo\_text and /demo\_binary of the application DEMO\_AMC in the package SABAPDEMOS.

Sending AMC Messages   

Before an AMC message can be sent in an authorized program (publish), the factory method CREATE\_MESSAGE\_PRODUCER of the system class CL\_AMC\_CHANNEL\_MANAGER must be used to create a sender object for a messaging channel from the repository. The application and name of the channel are passed here. The returned reference variable of type IF\_AMC\_MESSAGE\_PRODUCER must be cast to a type-specific interface that contains a method SEND used to send type-compliant messages. The following interfaces are possible, depending on the type of messaging channel used:

-   IF\_AMC\_MESSAGE\_PRODUCER\_TEXT
-   IF\_AMC\_MESSAGE\_PRODUCER\_BINARY
-   IF\_AMC\_MESSAGE\_PRODUCER\_PCP

Objects of the class CL\_AC\_MESSAGE\_TYPE\_PCP, which implement the interface IF\_AC\_MESSAGE\_TYPE\_PCP, can be used to create messages for the [Push Channel Protocol](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpcp.htm).

Hints

-   The sender of an AMC message implements the publish part of the publish-and-subscribe mechanism in AMC. The sender does not usually know whether receivers are registered for the AMC message.
-   The parameter I\_SUPPRESS\_ECHO of the method CREATE\_MESSAGE\_PRODUCER can be used to control whether messages are sent to the current ABAP session or not. It may be particularly helpful to suppress messages like these when joining AMC with [APC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenapc.htm) to stop superfluous messages from being sent.

Executable Examples

-   [Sending AMC Messages](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamc_send_abexa.htm)
-   [Suppressing Standalone Messages](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamc_suppress_echo_abexa.htm)

Receiving AMC Messages   

Before an AMC message can be received in an authorized program (subscribe), the factory method CREATE\_MESSAGE\_CONSUMER of the system class CL\_AMC\_CHANNEL\_MANAGER must be used to create a consumer for a messaging channel from the repository. The application and name of the channel are passed here. The returned reference variable has the type IF\_AMC\_MESSAGE\_CONSUMER. The consumer methods START\_MESSAGE\_DELIVERY and STOP\_MESSAGE\_DELIVERY fulfill two tasks:

-   Definition of the AMC delivery phase
    
    The method START\_MESSAGE\_DELIVERY makes the receiver program for the messaging channel of the consumer ready to receive messages. The method STOP\_MESSAGE\_DELIVERY undoes this step. Messages sent using the messaging channel are received only if the program is ready to receive.
    
-   Registration of the receiver objects for messaging channel messages
    
    Receiver objects are instances of local or global classes that implement at least one of the type-specific interfaces
    
    -   IF\_AMC\_MESSAGE\_RECEIVER\_TEXT
    -   IF\_AMC\_MESSAGE\_RECEIVER\_BINARY
    -   IF\_AMC\_MESSAGE\_RECEIVER\_PCP
    
    These interfaces each have a RECEIVE method that acts as a callback routine for the messaging channel for which a receiver object is registered. The input parameters of the callback routines receive the messages sent during registration in a type-compliant way and can be processed or forwarded in the methods. An object of the class CL\_AC\_MESSAGE\_TYPE\_PCP, pointed to by the attribute PCP\_MESSAGE of the receiver object, can be used to read messages in SAP's own [Push Channel Protocol](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpcp.htm).
    
    When the receiver objects are registered, object references are created in the AMC framework to the recipient objects to keep them alive. It is also possible to deregister the objects using the method STOP\_MESSAGE\_DELIVERY. This deletes the references. The objects are deregistered implicitly at the end of the program.
    

Once one or more receiver objects have been registered, the statement [WAIT FOR MESSAGING CHANNELS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwait_amc.htm) can be used to put the program in a wait state where it is ready to receive the messages. If, while the program is waiting, a message is received through a messaging channel for which a receiver object is registered, the associated RECEIVE method is executed and a check is made to see whether a logical condition is true or false. The wait state is persisted for as long as the condition is false, whereby a maximum duration can be configured. In this way, multiple messages can be consumed until a message is received that ends the wait state.

Hints

-   The methods START\_MESSAGE\_DELIVERY and STOP\_MESSAGE\_DELIVERY both cause a [database commit](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_commit_glosry.htm "Glossary Entry").
-   It is not possible to receive AMC messages during the [update](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenupdate_glosry.htm "Glossary Entry") process.

Executable Example

[Receiving AMC Messages](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamc_receive_abexa.htm)

Point-to-Point Communication   

In addition to the publish-and-subscribe mechanism, where the sender of message does not know the receivers, AMC also provides point-to-point communication, where a sender can create an AMC message for a specific receiver. The ID of the receiver session is required here.

-   A receiver can use the static method GET\_CONSUMER\_SESSION\_ID of the class CL\_AMC\_CHANNEL\_MANAGER to get the ID of its session and pass it to the sender in an appropriate way.
-   A sender that knows the ID of a receiver session can use the factory method CREATE\_MESSAGE\_PRODUCER\_BY\_ID of the class CL\_AMC\_CHANNEL\_MANAGER to create a special sender object for point-to-point communication for this receiver session. An AMC message sent using an object like this is only processed by the receiver of the receiver session passed to the parameter I\_CONSUMER\_SESSION\_ID.

The parameter I\_COMMUNICATION\_TYPE of the method CREATE\_MESSAGE\_PRODUCER\_BY\_ID can be used to configure whether a message is sent synchronously or asynchronously, whereby the latter is the default. When a message is sent synchronously, the sender waits for confirmation that the message was passed to the receiver session and otherwise raises an exception.

Executable Example

The executable example [Receiving AMC Messages](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamc_receive_abexa.htm) displays the ID of the receiver session. If this ID is entered in the example [Sending AMC Messages](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamc_send_abexa.htm), the message is sent synchronously and to this receiver session only.

AMC - Security   

Access to an ABAP messaging channel is controlled by specifying the authorized programs and their activities. When binding an APC WebSocket and when receiving using an APC WebSocket as a consumer, it is also possible to specify a virus scan profile to be used for the check performed by the virus scan interface (VSI).

AMC - Exceptions   

Error situations in sender and receiver programs, such as violations of rules set by the properties of a messaging channel, raise exceptions of the class CX\_AMC\_ERROR.

AMC - Test and Analysis   

AMC messages are both sent and received in AS ABAP, which means that existing test and analysis tools, such as the [ABAP Debugger](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_debugger_glosry.htm "Glossary Entry"), [runtime analysis](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenruntime_analysis_glosry.htm "Glossary Entry"), or [performance trace](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenperformance_trace_glosry.htm "Glossary Entry") can be used as usual. There is also a special AMC logger:

-   The transaction AMC\_LOG\_ADMIN can be used to switch AMC logging on and off for specific ABAP messaging channels.
-   The transaction AMC\_LOG\_PROCESSING can be used to manage the AMC log entries.

The transaction SMAMC provides an overview of all ABAP messaging channels for which AMC consumers are currently registered.

More Information   

Detailed information about AMC can be found in the ABAP Channels documentation in SAP Help Portal.

Continue
[WAIT FOR MESSAGING CHANNELS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwait_amc.htm)
[AMC - Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamc_abexas.htm)