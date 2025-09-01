---
title: "ABAP Daemon Framework (ADF)"
description: |
  ABAP daemon framework (ADF) is an application programming interface (API) based on interfaces and classes for creating and handling ABAP daemons(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_daemon_glosry.htm 'Glossary Entry'). An ABAP daemon is an instance of an ABAP d
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_daemon.htm"
abapFile: "abenabap_daemon.htm"
keywords: ["delete", "do", "if", "case", "try", "method", "class", "data", "internal-table", "abenabap", "daemon"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Daemon%20Framework%20%28ADF%29%2C%20ABENABAP_DAEMON%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Daemon Framework (ADF)

ABAP daemon framework (ADF) is an application programming interface (API) based on interfaces and classes for creating and handling [ABAP daemons](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_daemon_glosry.htm "Glossary Entry"). An ABAP daemon is an instance of an [ABAP daemon class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_daemon_class_glosry.htm "Glossary Entry") that lives in a special [ABAP daemon session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_daemon_session_glosry.htm "Glossary Entry"). Every AS instance in an AS ABAP has access to any of the daemons in this AS ABAP. ABAP programs themselves use the [ABAP daemon manager](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_daemon_manager_glosry.htm "Glossary Entry") to access ABAP daemons.

The lifetime of an ABAP daemon that is not stopped explicitly using ADF methods is limited only by the lifetime of the AS instance in which it is executed. An ABAP daemon is created again automatically every time a [runtime error](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenruntime_error_glosry.htm "Glossary Entry") or a [message](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmessage_glosry.htm "Glossary Entry") of type E, A, or X causes a program termination. When its AS instance is shut down, a daemon can be moved to another AS instance by creating a new daemon containing the same context information as the preceding daemon. This enables the new daemon to do the same job.

The [processing of an ABAP daemon](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_daemon_processing_glosry.htm "Glossary Entry") takes place in the background and controlled using events. A user of a daemon or the ABAP runtime framework can raise [ABAP daemon events](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_daemon_event_glosry.htm "Glossary Entry") to which the daemon reacts using predefined interface methods. A daemon must always be ready to react to inbound events and this is ensured by running ABAP daemon processing in a [non-blocking mode](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadf_non_blocking_model.htm).

-   [ABAP Daemon Classes](#abenabap-daemon-1-------creating-and-using-abap-daemons---@ITOC@@ABENABAP_DAEMON_2)
-   [Managing ABAP Daemons](#abenabap-daemon-3-------abap-daemon-examples---@ITOC@@ABENABAP_DAEMON_4)

Hints

-   ABAP daemons can be used as event handlers with long lifetimes, for example to respond to changes in shared internal or external AS ABAP resources.
-   For details about ABAP daemon framework, see [ABAP daemons](https://help.sap.com/docs/ABAP_PLATFORM_NEW/753088fc00704d0a80e7fbd6803c8adb/311af9b769d84fffa7b7384bae27109c).

ABAP Daemon Classes   

An [ABAP daemon class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_daemon_class_glosry.htm "Glossary Entry") is a global class that inherits from the abstract system class CL\_ABAP\_DAEMON\_EXT\_BASE and it must also be possible to create public instances of this daemon class. From the superclass, an ABAP daemon class inherits the methods of the interface IF\_ABAP\_DAEMON\_EXTENSION that it uses to react to [ABAP daemon events](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_daemon_event_glosry.htm "Glossary Entry") if they are implemented in the ABAP daemon class.

-   ON\_ACCEPT
    
    This method is executed before the actual start of the daemon. The return value of the method has the type ABAP\_DAEMON\_SETUP\_MODE from the ABAP Dictionary and must be set to a value specified by the components of the constant structure CO\_SETUP\_MODE of the interface IF\_ABAP\_DAEMON\_EXTENSION. The daemon start is accepted or rejected using these values. The method can be implemented to decide whether the start should be accepted or not. For example, user-dependent authorizations can be evaluated, and the start of the daemon can be limited to specific programs. To do this, the object passed in the input parameter I\_CONTEXT\_BASE of the static type IF\_ABAP\_DAEMON\_CONTEXT\_BASE can be evaluated. Its methods GET\_START\_PARAMETER and GET\_START\_CALLER\_INFO return the required information. They behave in the same way as the identically named methods of a context object.
    
-   ON\_START
    
    This method is executed when a daemon is started using the method START in the [ABAP daemon managers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_daemon_manager_glosry.htm "Glossary Entry") and directly after the daemon is instantiated. The daemon can be initialized in its implementation in the following ways:
    
    -   How context information is stored in the [ABAP Daemon Memory](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_daemon_memory_glosry.htm "Glossary Entry") or to other suitable memory areas, such as [shared memory](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshared_memory_glosry.htm "Glossary Entry") or database tables.
    -   How [ABAP Messaging Channels](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_messaging_channel_glosry.htm "Glossary Entry") are bound for communication with consumers.
    -   Whether an [ABAP Timer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_timer_glosry.htm "Glossary Entry") is created to limit the lifetime of the daemon if required.
-   ON\_MESSAGE
    
    This method is executed when the daemon receives a [PCP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpcp_glosry.htm "Glossary Entry") message sent using the method SEND of an [ABAP daemon handle](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_daemon_handle_glosry.htm "Glossary Entry"). To do this, the method ATTACH of the [ABAP daemon manager](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_daemon_manager_glosry.htm "Glossary Entry") returns a reference to a daemon handle. The messages in the input parameter I\_MESSAGE can be evaluated in the implementation of the method ON\_MESSAGE.
    
-   ON\_ERROR
    
    This method is executed after the daemon has been restarted automatically due to a [message](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmessage_glosry.htm "Glossary Entry") of the type E, A, or X or because of a [runtime error](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenruntime_error_glosry.htm "Glossary Entry"). A runtime error terminates the [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry") of the daemon, deletes the associated [ABAP memory](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_memory_glosry.htm "Glossary Entry"), and produces a [short dump](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshort_dump_glosry.htm "Glossary Entry"). The automatic restart opens a new internal session. The context of the daemon can be restored in the implementation of the method by accessing context information preserved in the [ABAP daemon memory](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_daemon_memory_glosry.htm "Glossary Entry") or in another repository. The input parameter I\_CODE contains information about the source of the runtime error. Runtime errors should be avoided in the method ON\_ERROR itself. If a runtime error still occurs here, the execution of the next method is delayed by 30 seconds.
    
-   ON\_RESTART
    
    This method is executed when the daemon is restarted using its context object or after the event ON\_BEFORE\_RESTART\_BY\_SYSTEM (see below). The context of the daemon can be restored in the implementation of the method by accessing context information preserved in the [ABAP daemon memory](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_daemon_memory_glosry.htm "Glossary Entry") or in another repository,
    
-   ON\_SERVER\_SHUTDOWN
    
    This method is executed when the current AS instance is shut down. This method can be implemented so that the daemon is moved to another free AS instance (if available) by starting a new daemon here with the same context information. The daemon is stopped automatically after this method is executed.
    
-   ON\_SYSTEM\_SHUTDOWN
    
    This method is executed when the current AS ABAP is shut down. This method can be implemented to include cleanup activities, such as deleting temporary daemon data in persistent repositories. The daemon is stopped automatically after this method is executed.
    
-   ON\_BEFORE\_RESTART\_BY\_SYSTEM
    
    This method is executed when an inconsistent state is detected in the daemon. This can occur when programs used by a daemon are modified and need to be reloaded. If necessary, this method can be implemented to perform appropriate tasks, such as updating the saved context information. After this method is executed, a restart is performed automatically and the method ON\_RESTART is then executed.
    
-   ON\_STOP
    
    This method is executed when the daemon is stopped using the method STOP of the [ABAP daemon manager](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_daemon_manager_glosry.htm "Glossary Entry") or using its context object (see below). This method can be implemented to include cleanup activities, such as deleting temporary daemon data in the relevant memory areas. In the input parameter I\_MESSAGE, the method is sent the [PCP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpcp_glosry.htm "Glossary Entry") message, which can be passed optionally when the daemon is stopped.
    

Except for ON\_ACCEPT, each of these methods has an input parameter I\_CONTEXT with the static type IF\_ABAP\_DAEMON\_CONTEXT that points to a context object. The context object has interface methods that handle context information about the current daemon or that stop or restart it:

-   GET\_START\_PARAMETER
    
    This method returns the [PCP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpcp_glosry.htm "Glossary Entry") message that was passed to the [ABAP daemon manager](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_daemon_manager_glosry.htm "Glossary Entry") when the daemon was started.
    
-   GET\_START\_CALLER\_INFO
    
    This method returns information about the context of the consumer of the daemon, such as the client, user name, or ABAP program in a structure of the type ABAP\_DAEMON\_START\_CALLER\_INFO.
    
-   GET\_INSTANCE\_ID
    
    This method returns the unique internal ID of the current daemon.
    
-   SET\_APPLICATION\_PARAMETER
    
    This method writes data to the [ABAP daemon memory](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_daemon_memory_glosry.htm "Glossary Entry") in [PCP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpcp_glosry.htm "Glossary Entry") format. Here, this data is assigned to the current daemon and it is preserved for the entire lifetime of the daemon, including any restarts. If SET\_APPLICATION\_PARAMETER is used again, all existing data is overwritten.
    
-   GET\_APPLICATION\_PARAMETER
    
    This method reads the latest data written using SET\_APPLICATION\_PARAMETER from the [ABAP daemon memory](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_daemon_memory_glosry.htm "Glossary Entry").
    
-   RESTART
    
    This method restarts the current daemon with the same internal ID. This deletes the internal session of the daemon with all associated memories, such as the [ABAP memory](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_memory_glosry.htm "Glossary Entry"), and opens a new internal session. The restart raises the event ON\_RESTART.
    
-   STOP
    
    This method stops the current daemon and raises the event ON\_STOP at the same time.
    

An ABAP daemon class can contain further helper methods and can call any number of other procedures in its methods. The implementation of an ABAP daemon class and the procedures it calls must be executable in [non-blocking mode](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadf_non_blocking_model.htm) to prevent the runtime error DAEMON\_ILLEGAL\_STATEMENT in [ABAP daemon processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_daemon_processing_glosry.htm "Glossary Entry") and a subsequent restart of the daemon.

Hints

-   To write context information, it is advisable to create a central helper method that is called by the methods ON\_START, ON\_ERROR, and ON\_RESTART. The [ABAP daemon memory](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_daemon_memory_glosry.htm "Glossary Entry") linked with the daemon is particularly well suited for this task, although other repositories can also be used, such as the shared memory or database tables.
-   The interface IF\_ABAP\_TIMER\_HANDLER can be implemented to turn an ABAP daemon class into an [ABAP timer handler](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_timer_handler_glosry.htm "Glossary Entry") too and hence make it able to react to [ABAP timer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_timer_glosry.htm "Glossary Entry") events. This makes it possible, for example, to wait for certain events or to stop the daemon after a certain time.

Creating and Using ABAP Daemons   

ABAP daemons are created and used with the static methods of the class CL\_ABAP\_DAEMON\_CLIENT\_MANAGER in ABAP daemon manager. The following rules apply here:

-   An ABAP daemon can be created and used from any ABAP program.
-   An ABAP daemon can only be used in the same AS ABAP as the creating program and the [ABAP daemon session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_daemon_session_glosry.htm "Glossary Entry") always has the same [client ID](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclient_identifier_glosry.htm "Glossary Entry") as the current [user session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuser_session_glosry.htm "Glossary Entry"). No predefined restrictions exist for the user who is using the creating program.
-   Only the program that created an ABAP daemon using the ABAP daemon manager can use this daemon in the ABAP daemon manager. If any other programs attempt this, an exception is raised. It is also not possible for a daemon to access itself using the ABAP daemon manager. If multiple programs are to access the same daemon, it is best to wrap these ABAP Daemon Manager reads in a class whose class pool is the only program that can access this daemon.

The ABAP daemon manager or the class CL\_ABAP\_DAEMON\_CLIENT\_MANAGER has the following methods:

-   START
    
    This method starts an ABAP daemon of an ABAP daemon class passed to the input parameter I\_CLASS\_NAME under a name passed to the input parameter I\_NAME. This daemon is started only if it is allowed by the interface method ON\_ACCEPT of the ABAP daemon class. When the daemon is started, a new [ABAP daemon session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_daemon_session_glosry.htm "Glossary Entry") is opened whose [client ID](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclient_identifier_glosry.htm "Glossary Entry") is adopted by the current user session and whose [user name](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuser_name_glosry.htm "Glossary Entry") and [logon language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogon_language_glosry.htm "Glossary Entry") are determined using an [RFC destination](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrfc_dest_glosry.htm "Glossary Entry") that can be passed to the input parameter I\_DESTINATION (this is optional). The default value is the predefined RFC destination NONE. An explicitly specified RFC destination must meet the following prerequisites:
    
    -   It must be an internal connection to the same AS ABAP.
    -   It must be an ABAP connection with or without load distribution.
    -   A client ID used in the RFC destination must be the same ID as used in the current user session.
    -   An AS instance specified as hostname\_sysid\_instnr must belong to the current AS ABAP.
    
    The input parameter I\_PRIORITY can be used to specify a priority with which the daemon reacts to [ABAP daemon events](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_daemon_event_glosry.htm "Glossary Entry"). The input parameter I\_PARAMETER can be used to pass a [PCP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpcp_glosry.htm "Glossary Entry") message to the daemon as a start parameter and the daemon can access this message using its context object.
    
    The output parameter E\_SETUP\_MODE gets the return value of the interface method ON\_ACCEPT of the ABAP daemon class. The output parameter E\_INSTANCE\_ID returns the internal ID of the started daemon, which is used by ABAP daemon manager to access this daemon.
    
-   ATTACH
    
    In its return value with the static type IF\_ABAP\_DAEMON\_HANDLE, this method returns a reference to an [ABAP daemon handle](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_daemon_handle_glosry.htm "Glossary Entry") for the daemon whose internal ID was passed to the input parameter I\_INSTANCE\_ID. The method SEND of the daemon handle can be used by the consumer to send [PCP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpcp_glosry.htm "Glossary Entry") messages to the daemon and the daemon can handle these messages in its interface method ON\_MESSAGE.
    
-   STOP
    
    This method stops the daemon whose internal ID was passed to the input parameter I\_INSTANCE\_ID. The [ABAP daemon event](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_daemon_event_glosry.htm "Glossary Entry") ON\_STOP is raised first. In the associated method, the daemon can evaluate the [PCP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpcp_glosry.htm "Glossary Entry") passed to the input parameter I\_PARAMETER.
    
-   GET\_DAEMON\_INFO
    
    Returns an internal table containing information about all ABAP daemons of the current AS ABAP for the ABAP daemon class that is passed to the input parameter I\_CLASS\_NAME.
    

Hints

-   It is advisable to create dedicated [RFC destinations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrfc_dest_glosry.htm "Glossary Entry") for ABAP daemons with a suitable user:
    -   ABAP daemons are processed in the background, which means that the user should not be a dialog user.
    -   The user should have exactly those authorizations required for daemon processing.
-   One consumer can create multiple ABAP daemons of an ABAP daemon class, which can then be distinguished by using different names. It can also be useful, however, to allow just one daemon from an ABAP daemon class as a singleton in a single AS ABAP. The corresponding checks must be programmed by the consumer.
-   In most cases, a consumer does not need to know the internal ID of an ABAP daemon. If the method calls of the ABAP daemon handler are wrapped in a class, as recommended, this class can encapsulate the ID in a private attribute.
-   A consumer can communicate with an ABAP daemon only by using [PCP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpcp_glosry.htm "Glossary Entry") messages.
-   On its own, the method GET\_DAEMON\_INFO of the ABAP daemon manager is not enough to create an ABAP daemon as a system-wide singleton. Parallel reads can be used to start multiple daemons in the same ABAP daemon class before they are returned by GET\_DAEMON\_INFO.
-   Internally, ABAP daemons are handled using the [RFC interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrfc_interface_glosry.htm "Glossary Entry"). Accordingly, a consumer of daemons must also have the associated [RFC authorizations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrfc_authority.htm).
-   The class pool of an ABAP daemon or the instance of an ABAP daemon class is always the only [ABAP session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_session_glosry.htm "Glossary Entry") program in its [ABAP daemon session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_daemon_session_glosry.htm "Glossary Entry"), since no program calls are possible in the associated [non-blocking mode](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadf_non_blocking_model.htm).
-   When an ABAP daemon is stopped or restarted due to an error, its entire context is removed. The associated [ABAP daemon session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_daemon_session_glosry.htm "Glossary Entry") is also ended and, if the daemon is restarted, a new session is started. This affects context information in the [ABAP daemon memory](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_daemon_memory_glosry.htm "Glossary Entry"), any [ABAP Timers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_timer_glosry.htm "Glossary Entry") that were started, and all non-persistent data in the associated [ABAP session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_session_glosry.htm "Glossary Entry"). More specifically, any [SAP locks](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensap_lock_glosry.htm "Glossary Entry") that were set are released.
    -   It is the task of the consumer to delete any daemon-specific data in the shared memory or other persistent repositories.
    -   In cases where a daemon is moved to a different AS instance, the consumer must also ensure that the required settings are transferred at the same time.

Managing ABAP Daemons   

The transaction SMDAEMON lists the ABAP daemons on the current AS instance and they can also be restarted or stopped here.

Hint

User-specific [breakpoints](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbreakpoint_glosry.htm "Glossary Entry") can be set when an ABAP daemon is being processed (namely when the methods of the ABAP daemon class and the procedures called here are executed) to debug the daemon.

ABAP Daemon Examples   

Executable Examples

-   [ADF, Mini ABAP Daemon](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_mini_daemon_abexa.htm)
-   [ADF, Creating and Using an ABAP Daemon](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_daemon_abexa.htm)

See also the class CL\_AD\_EXT\_SIMPLE\_DAEMON, which can be used by the program RS\_ABAP\_DAEMON\_TEST. Unlike in the preceding simple examples, this example is more reliable in producing a system-wide singleton ABAP daemon.

Continue
[ADF - Non-Blocking Mode](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadf_non_blocking_model.htm)
[ADF - Examples for ABAP Daemons](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_daemon_abexas.htm)