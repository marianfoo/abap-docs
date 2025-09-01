# ABAP Keyword Documentation / ABAP − Reference / Data Interfaces and Communication Interfaces / ADF - ABAP Daemon Framework

Included pages: 6


### abenabap_daemon.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) → 

ADF - ABAP Daemon Framework

ABAP Daemon Framework (ADF for short) is an application programming interface (or API) used to create and handle [ABAP Daemons](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_glosry.htm "Glossary Entry"). An ABAP Daemon is an instance of an [ABAP Daemon class](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_class_glosry.htm "Glossary Entry") that is persisted in a special [ABAP Daemon session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_session_glosry.htm "Glossary Entry"). Every AS Instance in an AS ABAP has access to any of the daemons in this AS ABAP. ABAP programs themselves use [ABAP Daemon Manager](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_manager_glosry.htm "Glossary Entry") to access ABAP Daemons.

The only limit on the lifetime of an ABAP Daemon not stopped explicitly using ADF methods is the lifetime of the AS Instance where it is running. An ABAP Daemon is created again automatically every time a [runtime error](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenruntime_error_glosry.htm "Glossary Entry") or a [message](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmessage_glosry.htm "Glossary Entry") of type E, A, or X causes it to terminate a program. When the AS Instance of a daemon is shut down, the daemon can be moved to another AS Instance by creating a new daemon containing the same context information as the preceding daemon. This enables the new daemon to do the same job.

The [processing of an ABAP Daemon](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_processing_glosry.htm "Glossary Entry") takes place in the background and is event-driven. Both the consumer of a daemon and the ABAP runtime environment can raise [ABAP Daemon events](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_event_glosry.htm "Glossary Entry") and the daemon can respond to these events using predefined interface methods. A daemon must always be ready to respond to inbound events and this is ensured by running ABAP Daemon processing in a [non-blocking mode](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadf_non_blocking_model.htm).

-   [ABAP Daemon Classes](#@@ITOC@@ABENABAP_DAEMON_1)

-   [Creating and Using ABAP Daemons](#@@ITOC@@ABENABAP_DAEMON_2)

-   [Managing ABAP Daemons](#@@ITOC@@ABENABAP_DAEMON_3)

-   [ABAP Daemon Examples](#@@ITOC@@ABENABAP_DAEMON_4)

Notes

-   ABAP Daemons can be used as event handlers with long lifetimes, for example to respond to changes in shared internal or external AS ABAP resources.

-   More details about ABAP Daemon Framework can be found under ABAP Daemons.

ABAP Daemon Classes

An [ABAP Daemon class](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_class_glosry.htm "Glossary Entry") is a global class that inherits from the abstract system class CL\_ABAP\_DAEMON\_EXT\_BASE and it must also be possible to create public instances of this daemon class. From the superclass, an ABAP Daemon class inherits the methods of the interface IF\_ABAP\_DAEMON\_EXTENSION that it uses to respond to [ABAP Daemon events](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_event_glosry.htm "Glossary Entry") if they are implemented in the ABAP Daemon class.

-   ON\_ACCEPT

This method is executed before the daemon is actually started. The return value of the method has the type ABAP\_DAEMON\_SETUP\_MODE from ABAP Dictionary and must be set to a value dictated by the components of the constant structure CO\_SETUP\_MODE of the interface IF\_ABAP\_DAEMON\_EXTENSION. The daemon start is accepted or rejected using these values. The method can be implemented to decide whether the start is accepted or not. For example, user-dependent authorizations can be evaluated and the start of the daemon can be limited to specific programs. To do this, the object passed in the input parameter I\_CONTEXT\_BASE of the static type IF\_ABAP\_DAEMON\_CONTEXT\_BASE can be evaluated. Its methods, GET\_START\_PARAMETER and GET\_START\_CALLER\_INFO, return the required information. They behave in the same way as the identically named methods of a context object.

-   ON\_START

This method is executed when a daemon is started using the method START in [ABAP Daemon Managers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_manager_glosry.htm "Glossary Entry") and directly after an instance of the daemon is executed. The daemon can be initialized in its implementation in the following ways:

-   How context information is saved in [ABAP Daemon Memory](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_memory_glosry.htm "Glossary Entry") or to other suitable memory areas, such as [shared memory](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshared_memory_glosry.htm "Glossary Entry") or database tables.

-   How [ABAP Messaging Channels](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_messaging_channel_glosry.htm "Glossary Entry") are bound for communication with consumers.

-   Whether an [ABAP Timer](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_timer_glosry.htm "Glossary Entry") is created to limit the lifetime of the daemon if required.

-   ON\_MESSAGE

This method is executed when the daemon receives a [PCP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpcp_glosry.htm "Glossary Entry") message sent using the method SEND of an [ABAP Daemon handle](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_handle_glosry.htm "Glossary Entry"). To do this, the method ATTACH in [ABAP Daemon Manager](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_manager_glosry.htm "Glossary Entry") returns a reference to a daemon handle. The messages in the input parameter I\_MESSAGE can be evaluated in the implementation of the method ON\_MESSAGE.

-   ON\_ERROR

This method is executed after the daemon is restarted automatically due to a [message](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmessage_glosry.htm "Glossary Entry") of the type E, A, or X or because of a [runtime error](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenruntime_error_glosry.htm "Glossary Entry"). A runtime error closes the [internal session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_session_glosry.htm "Glossary Entry") of the daemon, deletes the associated [ABAP memory](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_memory_glosry.htm "Glossary Entry"), and produces a [short dump](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshort_dump_glosry.htm "Glossary Entry"). The automatic restart opens a new internal session. The context of the daemon can be restored in the implementation of the method by accessing context information preserved in the [ABAP Daemon memory](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_memory_glosry.htm "Glossary Entry") or in another repository, The input parameter I\_CODE contains information about the source of the runtime error. Runtime errors should be avoided in the method ON\_ERROR itself If a runtime error does occur here, the execution of the next method is delayed by 30 seconds.

-   ON\_RESTART

This method is executed when the daemon is restarted using its context object or after the event ON\_BEFORE\_RESTART\_BY\_SYSTEM (see below). The context of the daemon can be restored in the implementation of the method by accessing context information preserved in the [ABAP Daemon memory](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_memory_glosry.htm "Glossary Entry") or in another repository,

-   ON\_SERVER\_SHUTDOWN

This method is executed when the current AS Instance is shut down. This method can be implemented so that the daemon is moved to another free AS Instance (if available) by starting a new daemon here with the same context information. The daemon is stopped automatically after this method is executed.

-   ON\_SYSTEM\_SHUTDOWN

This method is executed when the current AS ABAP is shut down. This method can be implemented to include cleanup activities, such as deleting temporary daemon data in persistent repositories. The daemon is stopped automatically after this method is executed.

-   ON\_BEFORE\_RESTART\_BY\_SYSTEM

This method is executed when an inconsistent state is detected in the daemon. This can occur when programs used by a daemon are modified and need to be reloaded. If necessary, this method can be implemented to perform appropriate tasks, such as updating the saved context information. After this method is executed, a restart is performed automatically and the method ON\_RESTART runs.

-   ON\_STOP

This method is executed when the daemon is stopped using the method STOP in [ABAP Daemon Manager](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_manager_glosry.htm "Glossary Entry") or using its context object (see below). This method can be implemented to include cleanup activities, such as deleting temporary daemon data in the relevant memory areas. In the input parameter I\_MESSAGE, the method is sent the [PCP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpcp_glosry.htm "Glossary Entry") message, which can be passed when the daemon is stopped (this is optional).

Except for ON\_ACCEPT, each of these methods has an input parameter I\_CONTEXT with the static type IF\_ABAP\_DAEMON\_CONTEXT that points to a context object. The context object has interface methods that handle context information about the current daemon or that stop or restart it:

-   GET\_START\_PARAMETER

This method returns the [PCP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpcp_glosry.htm "Glossary Entry") message that was passed to [ABAP Daemon Manager](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_manager_glosry.htm "Glossary Entry") when the daemon was started.

-   GET\_START\_CALLER\_INFO

This method returns information about the context of the consumer of the daemon, such as the client, user name, or ABAP program in a structure of the type ABAP\_DAEMON\_START\_CALLER\_INFO.

-   GET\_INSTANCE\_ID

This method returns the unique internal ID of the current daemon.

-   SET\_APPLICATION\_PARAMETER

This method writes data to the [ABAP Daemon memory](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_memory_glosry.htm "Glossary Entry") in [PCP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpcp_glosry.htm "Glossary Entry") format. Here, this data is assigned to the current daemon. Here, they are preserved for the full lifetime of the daemon (including any restarts). If SET\_APPLICATION\_PARAMETER is repeated, all existing data is overwritten.

-   GET\_APPLICATION\_PARAMETER

This method reads the latest data written using SET\_APPLICATION\_PARAMETER from the [ABAP Daemon memory](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_memory_glosry.htm "Glossary Entry").

-   RESTART

This method restarts the current daemon with the same internal ID. This deletes the internal session of the daemon with all associated memories, such as the [ABAP memory](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_memory_glosry.htm "Glossary Entry"), and opens a new internal session. The restart raises the event ON\_RESTART.

-   STOP

This method stops the current daemon and raises the event ON\_STOP at the same time.

An ABAP Daemon class can contain further helper methods and can call any number of other procedures in its methods. The implementation of an ABAP Daemon class and the procedures it calls must be executable in [non-blocking mode](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadf_non_blocking_model.htm) to prevent the runtime error DAEMON\_ILLEGAL\_STATEMENT in [ABAP Daemon processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_processing_glosry.htm "Glossary Entry") and a subsequent restart of the daemon.

Notes

-   To write context information, it is advisable to create a central helper method that is called by the methods ON\_START, ON\_ERROR, and ON\_RESTART. The [ABAP Daemon memory](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_memory_glosry.htm "Glossary Entry") associated with the daemon is particularly well suited for this task, although other repositories can also be used, such as the shared memory or database tables.

-   The interface IF\_ABAP\_TIMER\_HANDLER can be implemented to turn an ABAP Daemon class into an [ABAP Timer handler](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_timer_handler_glosry.htm "Glossary Entry") too and hence make it able to respond to [ABAP Timer](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_timer_glosry.htm "Glossary Entry") events. This makes it possible, for example, to wait for certain events or to stop the daemon after a defined period of time.

Creating and Using ABAP Daemons

ABAP Daemons are created and consumed using the static methods of the class CL\_ABAP\_DAEMON\_CLIENT\_MANAGER in ABAP Daemon Manager. The following rules apply here:

-   An ABAP Daemon can be created and used from any ABAP program.

-   An ABAP Daemon can only be used in the same AS ABAP as the program it was created by and the [ABAP Daemon session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_session_glosry.htm "Glossary Entry") always has the same [client ID](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclient_identifier_glosry.htm "Glossary Entry") as the current [user session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuser_session_glosry.htm "Glossary Entry"). No predefined restrictions exist for the user who is using the program in question.

-   Only the program that created an ABAP Daemon using ABAP Daemon Manager can use this daemon in ABAP Daemon Manager. If any other programs attempt this, an exception is raised. It is also not possible for a daemon to access itself using ABAP Daemon Manager. If multiple programs need to access the same daemon, it is best to wrap these ABAP Daemon Manager reads in a class whose class pool is the only program that can access this daemon.

ABAP Daemon Manager (or the class CL\_ABAP\_DAEMON\_CLIENT\_MANAGER) has the following methods:

-   START

This method starts an ABAP Daemon of an ABAP Daemon class passed to the input parameter I\_CLASS\_NAME under a name passed to the input parameter I\_NAME. This daemon is started only when permitted by the interface method ON\_ACCEPT of the ABAP Daemon class. When the daemon is started, a new [ABAP Daemon session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_session_glosry.htm "Glossary Entry") is opened whose [client ID](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclient_identifier_glosry.htm "Glossary Entry") is adopted by the current user session and whose [user name](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuser_name_glosry.htm "Glossary Entry") and [logon language](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogon_language_glosry.htm "Glossary Entry") are determined using an [RFC destination](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendestination_glosry.htm "Glossary Entry") that can be passed to the input parameter I\_DESTINATION (this is optional). The default value is the predefined RFC destination NONE. An explicitly specified RFC destination must meet the following prerequisites:

-   It must be an internal connection to the same AS ABAP.

-   It must be an ABAP connection (with or without load distribution).

-   A client ID used in the RFC destination must be the same ID as used in the current user session.

-   An AS Instance specified as hostname\_sysid\_instnr must belong to the current AS ABAP.

The input parameter I\_PRIORITY can be used to specify a priority for the response of the daemon to [ABAP Daemon events](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_event_glosry.htm "Glossary Entry"). The input parameter I\_PARAMETER can be used to pass a [PCP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpcp_glosry.htm "Glossary Entry") message to the daemon as a start parameter and the daemon can access this message using its context object.

The output parameter E\_SETUP\_MODE gets the return value of the interface method ON\_ACCEPT of the ABAP Daemon class. The output parameter E\_INSTANCE\_ID gets the internal ID of the started daemon, which is used by ABAP Daemon Manager to access this daemon.

-   ATTACH

In its return value with the static type IF\_ABAP\_DAEMON\_HANDLE, this method returns a reference to an [ABAP Daemon handle](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_handle_glosry.htm "Glossary Entry") for the daemon whose internal ID was passed to the input parameter I\_INSTANCE\_ID. The method SEND of the daemon handle can be used by the consumer to send [PCP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpcp_glosry.htm "Glossary Entry") messages to the daemon and the daemon can handle these messages in its interface method ON\_MESSAGE.

-   STOP

This method stops the daemon whose internal ID was passed to the input parameter I\_INSTANCE\_ID. The [ABAP Daemon event](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_event_glosry.htm "Glossary Entry") ON\_STOP is raised first. In the associated method, the daemon can evaluate the [PCP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpcp_glosry.htm "Glossary Entry") passed to the input parameter I\_PARAMETER.

-   GET\_DAEMON\_INFO

Returns an internal table containing information about all ABAP Daemons in the current AS ABAP for the ABAP Daemon class that is passed to the input parameter I\_CLASS\_NAME.

Notes

-   It is advisable to create dedicated [RFC destinations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendestination_glosry.htm "Glossary Entry") for ABAP Daemons with a suitable user:

-   ABAP Daemons run in the background, which means that dialog users should not be used.

-   The user in question should have precisely those authorizations required for daemon processing.

-   One consumer can create multiple ABAP Daemons of an ABAP Daemon class, which can then be distinguished by using different names. It can also be useful, however, to permit just one daemon from an ABAP Daemon class as a singleton in a single AS ABAP. The checks needed here must be provided by the consumer.

-   In most cases, a consumer does not need to know the internal ID of an ABAP Daemon. If the method calls of the ABAP Daemon handler are wrapped in a class, as recommended, this class can encapsulate them in a private attribute.

-   A consumer can communicate with an ABAP Daemon only by using [PCP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpcp_glosry.htm "Glossary Entry") messages.

-   On its own, the method GET\_DAEMON\_INFO in ABAP Daemon Manager is not enough to create an ABAP Daemon as a system-wide singleton. Parallel reads can be used to start multiple daemons in the same ABAP Daemon class before they are returned by GET\_DAEMON\_INFO.

-   Internally, ABAP Daemons are handled using the [RFC interface](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc_interface_glosry.htm "Glossary Entry"). Accordingly, a consumer of daemons must also have the associated [RFC authorizations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc_authority.htm).

-   The class pool of an ABAP Daemon (or the instance of an ABAP Daemon class) is always the only [ABAP session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmain_session_glosry.htm "Glossary Entry") program in its [ABAP Daemon session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_session_glosry.htm "Glossary Entry"), since no program calls are possible in the associated [non-blocking mode](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadf_non_blocking_model.htm).

-   When an ABAP Daemon is stopped or restarted due to an error, its entire context is removed. The associated [ABAP Daemon session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_session_glosry.htm "Glossary Entry") is also ended and, if the daemon is restarted, a new session is started, This affects any context information in the [ABAP Daemon memory](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_memory_glosry.htm "Glossary Entry"), any [ABAP Timers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_timer_glosry.htm "Glossary Entry") that were started, and all non-persistent data in the associated [ABAP session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmain_session_glosry.htm "Glossary Entry"). More specifically, any [SAP locks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_lock_glosry.htm "Glossary Entry") that were set are released.

-   It is the task of the consumer to delete any daemon-specific data in the shared memory or other persistent repositories.

-   In cases where a daemon is moved to a different AS Instance, the consumer must also ensure that the settings in question are transferred at the same time.

Managing ABAP Daemons

The transaction SMDAEMON displays the ABAP Daemons on the current AS Instance and they can also be restarted or stopped here.

Note

User-specific [breakpoints](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbreakpoint_glosry.htm "Glossary Entry") can be set when an ABAP Daemon is being processed (namely when the methods of the ABAP Daemon class and the procedures called here are executed) to debug the daemon.

ABAP Daemon Examples

Executable Examples

-   [ADF, Mini ABAP Daemon](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_mini_daemon_abexa.htm)

-   [ADF, Creating and Using an ABAP Daemon](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_abexa.htm)

See also the class CL\_AD\_EXT\_SIMPLE\_DAEMON, which can be used by the program RS\_ABAP\_DAEMON\_TEST. Unlike in the preceding simple examples, this example is more reliable in producing a system-wide singleton ABAP Daemon.

Continue
[ADF - Non-Blocking Mode](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadf_non_blocking_model.htm)
[Examples for ABAP Daemons](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_abexas.htm)


### abenadf_non_blocking_model.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) →  [ADF - ABAP Daemon Framework](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon.htm) → 

ADF - Non-Blocking Mode

[ABAP Daemon processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_processing_glosry.htm "Glossary Entry") is event-driven To stop an [ABAP Daemon session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_session_glosry.htm "Glossary Entry") type from being blocked for inbound messages, the the session runs in [non-blocking model](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennon_blocking_model_glosry.htm "Glossary Entry"). In non-blocking mode for ADF, the following blocking statements are forbidden in ABAP Daemon processing and in the procedures called here:

-   Calls

-   [SUBMIT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsubmit.htm)

-   [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transaction.htm)

-   [CALL DIALOG](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_dialog.htm)

-   [CALL SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_screen.htm)

-   [CALL SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_selection_screen.htm)

-   [SET SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_screen.htm)

-   Exit

-   [LEAVE LIST-PROCESSING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapleave_list-processing.htm)

-   [LEAVE PROGRAM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapleave_program.htm)

-   [LEAVE SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapleave_screen.htm)

-   [LEAVE TO TRANSACTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapleave_to_transaction.htm)

-   [LEAVE TO LIST-PROCESSING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapleave_to_list-processing.htm)

-   [CHECK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcheck_processing_blocks.htm), [EXIT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapexit_processing_blocks.htm), [STOP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapstop.htm), and [REJECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreject.htm) for exiting [reporting events](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreporting_event_glosry.htm "Glossary Entry")

-   Wait

-   [WAIT UP TO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwait_up_to.htm), [WAIT FOR ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwait_until.htm)

-   [COMMUNICATION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcommunication.htm)

Using a statement like this in non-blocking mode produces a runtime error.

Notes

-   The statement WAIT is not allowed in non-blocking mode. To be able to wait for certain events despite this restriction (such as the end of a callback routine in [aRFC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarfc_glosry.htm "Glossary Entry"), [ABAP Timers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_timer_glosry.htm "Glossary Entry") can be used. An ABAP Timer is created by [ABAP Timer Manager](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_timer_manager_glosry.htm "Glossary Entry") and handled using [ABAP Timer handlers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_timer_handler_glosry.htm "Glossary Entry"). The associated class and interfaces are CL\_ABAP\_TIMER\_MANAGER, IF\_ABAP\_TIMER\_MANAGER, and IF\_ABAP\_TIMER\_HANDLER. ABAP Timers can only be used in non-blocking mode, namely [APC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenapc_session_glosry.htm "Glossary Entry") and [ABAP Daemon sessions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_session_glosry.htm "Glossary Entry").

-   Unlike in [non-blocking mode](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenapc_non_blocking_model.htm) for [APC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenapc_glosry.htm "Glossary Entry"), the statement [CALL FUNCTION DESTINATION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_destination.htm) for [sRFC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensrfc_glosry.htm "Glossary Entry") is allowed in ABAP Daemon processing.


### abenabap_daemon_abexas.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) →  [ADF - ABAP Daemon Framework](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon.htm) → 

Examples for ABAP Daemons

Continue
![Example](exa.gif "Example") [ADF, Mini ABAP Daemon](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_mini_daemon_abexa.htm)
![Example](exa.gif "Example") [ADF, Creating and Using an ABAP Daemon](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_abexa.htm)


### abenabap_mini_daemon_abexa.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) →  [ADF - ABAP Daemon Framework](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon.htm) →  [Examples for ABAP Daemons](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_abexas.htm) → 

ADF, Mini ABAP Daemon

This example demonstrates a mini [ABAP Daemon](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_glosry.htm "Glossary Entry").

Source Code

REPORT demo\_abap\_mini\_daemon.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TRY.
        DATA(pcp) = cl\_ac\_message\_type\_pcp=>create( ).
        pcp->set\_text( \`Hello Daemon!\` ).
      CATCH cx\_ac\_message\_type\_pcp\_error INTO DATA(pcp\_exc).
        cl\_demo\_output=>display( pcp\_exc->get\_text( ) ).
        RETURN.
    ENDTRY.
    TRY.
        cl\_abap\_daemon\_client\_manager=>start(
          EXPORTING
            i\_class\_name = 'CL\_DEMO\_ABAP\_MINI\_DAEMON'
            i\_name       = 'DemoMiniDaemon'
         IMPORTING
            e\_instance\_id = DATA(instance\_id) ).
        cl\_abap\_daemon\_client\_manager=>attach(
          i\_instance\_id = instance\_id )->send( pcp ).
        cl\_abap\_daemon\_client\_manager=>stop(
          i\_instance\_id = instance\_id ).
      CATCH cx\_abap\_daemon\_error INTO DATA(daemon\_exc).
        cl\_demo\_output=>display( daemon\_exc->get\_text( ) ).
        RETURN.
    ENDTRY.
    DATA msg TYPE string.
    IMPORT msg = msg FROM SHARED MEMORY demo\_indx\_blob(dm)
                     ID 'DemoMiniDaemon'.
    ASSERT msg = \`Hello Daemon!\`.
    cl\_demo\_output=>display( 'Daemon has received the message' ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The class CL\_DEMO\_ABAP\_MINI\_DAEMON used by the program above demonstrates a mini [ABAP Daemon class](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_class_glosry.htm "Glossary Entry"). It implements only the following methods of the interface IF\_ABAP\_DAEMON\_EXTENSION:

-   ON\_ACCEPT

METHOD if\_abap\_daemon\_extension~on\_accept.
  TRY.
      IF i\_context\_base->get\_start\_caller\_info(
           )-program = 'DEMO\_ABAP\_MINI\_DAEMON'.
        e\_setup\_mode = co\_setup\_mode-accept.
      ENDIF.
    CATCH cx\_abap\_daemon\_error.
      RETURN.
  ENDTRY.
ENDMETHOD.

In this method, the return value E\_SETUP\_MODE must be set to ensure that the daemon is created. The method limits the creation of daemons to the program DEMO\_ABAP\_MINI\_DAEMON.

-   ON\_MESSAGE

METHOD IF\_ABAP\_DAEMON\_EXTENSION~ON\_MESSAGE.
  TRY.
      DATA(msg) = i\_message->get\_text( ).
    CATCH cx\_ac\_message\_type\_pcp\_error.
      RETURN.
  ENDTRY.
  EXPORT msg = msg TO SHARED MEMORY demo\_indx\_blob(dm)
                   ID 'DemoMiniDaemon'.
ENDMETHOD.

This method indicates that the daemon is responding to message from a program. To enable this, the message is exported to the [cross-transaction application buffer](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencrosstrans_app_buffer_glosry.htm "Glossary Entry") of the shared memory.

The program DEMO\_ABAP\_MINI\_DAEMON uses [ABAP Daemon Manager](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_manager_glosry.htm "Glossary Entry") to do the following:

-   Start a daemon based on the class CL\_DEMO\_ABAP\_MINI\_DAEMON.

-   Send a [PCP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpcp_glosry.htm "Glossary Entry") message using a temporary [ABAP Daemon handle](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_handle_glosry.htm "Glossary Entry").

-   Stop the daemon immediately (not a typical step).

It then checks whether the daemon wrote the message to the shared memory.


### abenabap_daemon_abexa.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) →  [ADF - ABAP Daemon Framework](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon.htm) →  [Examples for ABAP Daemons](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_abexas.htm) → 

ADF, Creating and Using an ABAP Daemon

This example demonstrates an [ABAP Daemon](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_glosry.htm "Glossary Entry").

Source Code

REPORT demo\_abap\_daemon.
CLASS amc\_receiver DEFINITION.
  PUBLIC SECTION.
    INTERFACES
      if\_amc\_message\_receiver\_text.
    DATA msg TYPE string.
ENDCLASS.
CLASS amc\_receiver IMPLEMENTATION.
  METHOD if\_amc\_message\_receiver\_text~receive.
    msg = i\_message.
  ENDMETHOD.
ENDCLASS.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-DATA:
      start\_daemon       TYPE abap\_bool,
      get\_information    TYPE abap\_bool,
      send\_message       TYPE abap\_bool,
      trigger\_amc        TYPE abap\_bool,
      trigger\_exception  TYPE abap\_bool,
      trigger\_blocking   TYPE abap\_bool,
      trigger\_restart    TYPE abap\_bool,
      trigger\_relocation TYPE abap\_bool,
      trigger\_stop       TYPE abap\_bool,
      stop\_daemon        TYPE abap\_bool.
    CLASS-DATA:
      out TYPE REF TO if\_demo\_output.
    CLASS-METHODS:
      get\_input,
      write\_log IMPORTING msg TYPE string.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DELETE FROM DATABASE demo\_indx\_blob(dm)
                ID cl\_demo\_abap\_daemon\_broker=>daemon\_log.
    COMMIT CONNECTION default.
    get\_input( ).
    out = cl\_demo\_output=>new( ).
    out->next\_section( 'ABAP Program' ).
    TRY.
        IF NOT cl\_demo\_abap\_daemon\_broker=>check\_daemon( ).
          IF start\_daemon = abap\_true.
            DATA(pcp) = cl\_ac\_message\_type\_pcp=>create( ).
            pcp->set\_field( i\_name = \`Version\`
                            i\_value = \`1\` ).
            IF cl\_demo\_abap\_daemon\_broker=>start\_daemon(
                 pcp = pcp ).
              write\_log( \`Daemon start requested\` ).
            ELSE.
              write\_log( \`Daemon not accepted\` ).
            ENDIF.
          ELSE.
            write\_log( \`Daemon not started\` ).
          ENDIF.
        ELSE.
          cl\_demo\_abap\_daemon\_broker=>attach\_daemon( ).
          CASE abap\_true.
            WHEN start\_daemon.
              write\_log( \`Daemon already started\` ).
            WHEN get\_information.
              write\_log( \`Information requested\` ).
              out->write(
                cl\_demo\_abap\_daemon\_broker=>get\_daemon\_info( ) ).
            WHEN send\_message.
              pcp = cl\_ac\_message\_type\_pcp=>create( ).
              pcp->set\_field( i\_name = \`Type\`
                              i\_value = \`msg\` ).
              pcp->set\_text( \`Hello Daemon!\` ).
              cl\_demo\_abap\_daemon\_broker=>send\_message( pcp = pcp ).
              write\_log( \`Text message sent\` ).
            WHEN trigger\_amc.
              DATA(receiver) = NEW amc\_receiver( ).
              TRY.
                  cl\_amc\_channel\_manager=>create\_message\_consumer(
                    i\_application\_id = 'DEMO\_AMC'
                    i\_channel\_id     = '/demo\_text'
                    )->start\_message\_delivery( i\_receiver = receiver ).
                CATCH cx\_amc\_error INTO DATA(amc\_exc).
                  write\_log( \`Exception, \` && amc\_exc->get\_text( ) ).
              ENDTRY.
              pcp = cl\_ac\_message\_type\_pcp=>create( ).
              pcp->set\_field( i\_name = \`Type\`
                              i\_value = \`amc\` ).
              cl\_demo\_abap\_daemon\_broker=>send\_message( pcp = pcp ).
              write\_log( \`AMC message triggered\` ).
              WAIT FOR MESSAGING CHANNELS
                   UNTIL receiver->msg IS NOT INITIAL
                   UP TO 10 SECONDS.
              IF receiver->msg IS NOT INITIAL.
                write\_log( |AMC message "{ receiver->msg }" received| ).
              ELSE.
                write\_log( |No AMC message received| ).
              ENDIF.
            WHEN trigger\_exception.
              pcp = cl\_ac\_message\_type\_pcp=>create( ).
              pcp->set\_field( i\_name = \`Type\`
                              i\_value = \`err\` ).
              cl\_demo\_abap\_daemon\_broker=>send\_message( pcp = pcp ).
              write\_log( \`Exception triggered\` ).
            WHEN trigger\_blocking.
              pcp = cl\_ac\_message\_type\_pcp=>create( ).
              pcp->set\_field( i\_name = \`Type\`
                              i\_value = \`blk\` ).
              cl\_demo\_abap\_daemon\_broker=>send\_message( pcp = pcp ).
              write\_log( \`Blocking statement triggered\` ).
            WHEN trigger\_restart.
              pcp = cl\_ac\_message\_type\_pcp=>create( ).
              pcp->set\_field( i\_name = \`Type\`
                              i\_value = \`rst\` ).
              cl\_demo\_abap\_daemon\_broker=>send\_message( pcp = pcp ).
              write\_log( \`Restart triggered\` ).
            WHEN trigger\_relocation.
              pcp = cl\_ac\_message\_type\_pcp=>create( ).
              pcp->set\_field( i\_name = \`Type\`
                              i\_value = \`rlo\` ).
              cl\_demo\_abap\_daemon\_broker=>send\_message( pcp = pcp ).
              write\_log( \`Relocation triggered\` ).
            WHEN trigger\_stop.
              pcp = cl\_ac\_message\_type\_pcp=>create( ).
              pcp->set\_field( i\_name = \`Type\`
                              i\_value = \`stp\` ).
              cl\_demo\_abap\_daemon\_broker=>send\_message( pcp = pcp ).
              write\_log( \`Stop triggered\` ).
            WHEN stop\_daemon.
              cl\_demo\_abap\_daemon\_broker=>stop\_daemon( ).
              write\_log( \`Daemon stop requested\` ).
          ENDCASE.
        ENDIF.
      CATCH cx\_abap\_daemon\_error
            cx\_ac\_message\_type\_pcp\_error INTO DATA(exc).
        write\_log( \`Exception, \` && exc->get\_text( ) ).
    ENDTRY.
    WAIT UP TO 1 SECONDS.
    out->next\_section( 'ABAP Daemon' ).
    DATA(daemon\_log) = \`\`.
    IMPORT daemon\_log = daemon\_log
           FROM DATABASE demo\_indx\_blob(dm)
           ID cl\_demo\_abap\_daemon\_broker=>daemon\_log.
    IF sy-subrc = 0.
      out->write( daemon\_log ).
    ENDIF.
    out->display( ).  ENDMETHOD.
  METHOD get\_input.
    cl\_demo\_input=>new(
     )->add\_field( EXPORTING as\_checkbox = abap\_true
                   CHANGING  field = start\_daemon
     )->add\_field( EXPORTING as\_checkbox = abap\_true
                   CHANGING  field = get\_information
     )->add\_field( EXPORTING as\_checkbox = abap\_true
                   CHANGING  field = send\_message
     )->add\_field( EXPORTING as\_checkbox = abap\_true
                   CHANGING  field = trigger\_amc
     )->add\_field( EXPORTING as\_checkbox = abap\_true
                   CHANGING  field = trigger\_exception
     )->add\_field( EXPORTING as\_checkbox = abap\_true
                   CHANGING  field = trigger\_blocking
     )->add\_field( EXPORTING as\_checkbox = abap\_true
                   CHANGING  field = trigger\_restart
     )->add\_field( EXPORTING as\_checkbox = abap\_true
                   CHANGING  field = trigger\_relocation
     )->add\_field( EXPORTING as\_checkbox = abap\_true
                   CHANGING  field = trigger\_stop
     )->add\_field( EXPORTING as\_checkbox = abap\_true
                   CHANGING  field = stop\_daemon
     )->request( ).
    IF start\_daemon       &&
       get\_information    &&
       send\_message       &&
       trigger\_amc        &&
       trigger\_exception  &&
       trigger\_blocking   &&
       trigger\_restart    &&
       trigger\_relocation &&
       trigger\_stop       &&
       stop\_daemon <> abap\_true.
      cl\_demo\_output=>display( \`Check exactly one box\` ).
      LEAVE PROGRAM.
    ENDIF.
  ENDMETHOD.
  METHOD write\_log.
    DATA ts TYPE timestampl.
    GET TIME STAMP FIELD ts.
    out->write( |{ ts TIMESTAMP = ISO }: { msg }| ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

It implements the most important aspects of an ABAP Daemon and contains the program above and two classes.

Program DEMO\_ABAP\_DAEMON

This program makes it possible to start an ABAP Daemon interactively and then perform various actions using the daemon. The checkboxes have the following meanings:

-   START\_DAEMON

Attempts to start an ABAP Daemon. Only one ABAP Daemon of the ABAP Daemon class in question may exist. When the program starts, a version number is passed in [PCP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpcp_glosry.htm "Glossary Entry") format. If an ABAP Daemon already exists, this daemon is used.

-   GET\_INFORMATION

Gets information about the ABAP Daemon and displays it.

-   SEND\_MESSAGE

Sends a text message to the ABAP Daemon in [PCP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpcp_glosry.htm "Glossary Entry") format.

-   TRIGGER\_AMC

Sends a [PCP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpcp_glosry.htm "Glossary Entry") message to the ABAP Daemon instructing the daemon to send an [AMC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamc_glosry.htm "Glossary Entry") message. The program waits until the message arrives at a dedicated AMC receiver.

-   TRIGGER\_EXCEPTION

Sends a [PCP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpcp_glosry.htm "Glossary Entry") message to the ABAP Daemon, where an exception is raised. The exception produces a [short dump](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshort_dump_glosry.htm "Glossary Entry") that can be viewed in transaction ST22 and the ABAP Daemon is restarted automatically. This raises the version number by 1.

-   TRIGGER\_BLOCKING

Sends a [PCP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpcp_glosry.htm "Glossary Entry") message to the ABAP Daemon instructing it to create a statement forbidden in [non-blocking mode](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadf_non_blocking_model.htm). This raises an exception and [short dump](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshort_dump_glosry.htm "Glossary Entry"), which can be viewed in transaction ST22. The ABAP Daemon is then restarted automatically. This raises the version number by 1.

-   TRIGGER\_RESTART

Sends a [PCP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpcp_glosry.htm "Glossary Entry") message to the ABAP Daemon that restarts the daemon. This raises the version number by 1.

-   TRIGGER\_RELOCATION

Sends a [PCP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpcp_glosry.htm "Glossary Entry") message to the ABAP Daemon instructing the daemon to create a new instance of its class on a different AS Instance and delete the previous instance.

-   TRIGGER\_STOP

Sends a [PCP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpcp_glosry.htm "Glossary Entry") message to the ABAP Daemon instructing it to stop.

-   STOP\_DAEMON

Stops the daemon.

The output of the program displays the individual actions in both the program and in the ABAP Daemon. To do this, the daemon writes entries to the [export/import table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexport_import_table_glosry.htm "Glossary Entry") DEMO\_INDX\_BLOB, which are then read by the ABAP program after a short delay. If the system in question is slow, this delay may not be long enough to display all actions in the daemon. The ABAP Daemon on the current AS Instance can be viewed in parallel to the execution of the program using the transaction SMDAEMON.

Class CL\_ABAP\_DAEMON\_BROKER

The program DEMO\_ABAP\_DAEMON does not work directly with the class CL\_ABAP\_DAEMON\_CLIENT\_MANAGER and any reads performed on this class are wrapped in the class CL\_DEMO\_ABAP\_DAEMON\_BROKER. This is because CL\_ABAP\_DAEMON\_CLIENT\_MANAGER can only be used to access an ABAP Daemon in the program where the daemon was started. It must be possible for the daemon itself to create an instance of its class in this example, which means the reads must be moved to a program that can be accessed from both the ABAP program and the ABAP Daemon. To enable this, CL\_DEMO\_ABAP\_DAEMON\_BROKER contains the following methods:

-   CHECK\_DAEMON

METHOD check\_daemon.
  DATA(daemon\_info) =
    cl\_abap\_daemon\_client\_manager=>get\_daemon\_info(
      i\_class\_name = daemon\_class ).
  instance\_id =
     VALUE #( daemon\_info\[ name = daemon\_name \]-instance\_id
              OPTIONAL ).
  success = COND #( WHEN instance\_id IS NOT INITIAL THEN abap\_true ).
ENDMETHOD.

This method determines whether a daemon of the ABAP Daemon class CL\_DEMO\_ABAP\_DAEMON already exists and saves its ID for further use. The program DEMO\_ABAP\_DAEMON starts a daemon of the class CL\_DEMO\_ABAP\_DAEMON only if no daemon exists. The method shown here for creating an ABAP Daemon as a singleton is not, however, 100% reliable. It is possible that further daemons are created in the same class in the time between starting the daemon and its being returned by the method GET\_DAEMON\_INFO. A fully reliable program, however, would be too detailed for this simple example.

-   START\_DAEMON

METHOD start\_daemon.
  DATA stack TYPE abap\_callstack.
  CALL FUNCTION 'SYSTEM\_CALLSTACK'
    IMPORTING
      callstack = stack.
  IF VALUE #( stack\[ 2 \]-mainprogram OPTIONAL )
     <> 'DEMO\_ABAP\_DAEMON' AND
     VALUE #( stack\[ 2 \]-mainprogram OPTIONAL )
     <> 'CL\_DEMO\_ABAP\_DAEMON===========CP'.
    RETURN.
  ENDIF.
  cl\_abap\_daemon\_client\_manager=>start(
    EXPORTING
      i\_class\_name  = daemon\_class
      i\_name        = daemon\_name
      i\_parameter   = pcp
      i\_destination = destination
    IMPORTING
      e\_instance\_id = instance\_id
      e\_setup\_mode  = DATA(setup\_mode) ).
  success =
    COND #( WHEN setup\_mode =
                   if\_abap\_daemon\_extension=>co\_setup\_mode-accept
            THEN abap\_true ).
ENDMETHOD.

This method wraps the method START of the class CL\_ABAP\_DAEMON\_CLIENT\_MANAGER and starts an ABAP Daemon of the ABAP Daemon class CL\_DEMO\_ABAP\_DAEMON. Any callers are checked to ensure that the method is only used in the program DEMO\_ABAP\_DAEMON and in the ABAP Daemon class. The ID of the started daemon is saved for further use. If the ABAP Daemon class is accepted when started, the return value is not initial.

-   GET\_DAEMON\_INFO

METHOD get\_daemon\_info.
  daemon\_info =
    cl\_abap\_daemon\_client\_manager=>get\_daemon\_info(
      i\_class\_name = daemon\_class ).
ENDMETHOD.

This method wraps the identically named method of the class CL\_ABAP\_DAEMON\_CLIENT\_MANAGER and returns information about the ABAP Daemons of the ABAP Daemon class CL\_DEMO\_ABAP\_DAEMON.

-   ATTACH\_DAEMON

METHOD attach\_daemon.
  daemon\_handle = cl\_abap\_daemon\_client\_manager=>attach(
    i\_instance\_id = instance\_id ).
ENDMETHOD.

This method wraps the method ATTACH of the class CL\_ABAP\_DAEMON\_CLIENT\_MANAGER. The returned reference to the [ABAP Daemon handle](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_handle_glosry.htm "Glossary Entry") is saved in the private attribute DAEMON\_HANDLE.

-   SEND\_MESSAGE

METHOD send\_message.
  IF daemon\_handle IS INITIAL.
    RAISE EXCEPTION TYPE cx\_abap\_daemon\_error
      EXPORTING
        textid = cx\_abap\_daemon\_error=>action\_not\_permitted.
  ENDIF.
  daemon\_handle->send( pcp ).
ENDMETHOD.

This method is used to send [PCP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpcp_glosry.htm "Glossary Entry") messages to the ABAP Daemon. To do this, the method SEND of the [ABAP Daemon handle](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_handle_glosry.htm "Glossary Entry") is used, which is referenced in the private attribute DAEMON\_HANDLE.

-   STOP\_DAEMON

METHOD stop\_daemon.
  cl\_abap\_daemon\_client\_manager=>stop(
    i\_instance\_id = instance\_id ).
ENDMETHOD.

This method wraps the method STOP of the class CL\_ABAP\_DAEMON\_CLIENT\_MANAGER and is used to stop the ABAP Daemon.

The name of the ABAP Daemon and the ABAP Daemon class are defined as constants of the class CL\_ABAP\_DAEMON\_BROKER.

Class CL\_ABAP\_DAEMON

The class CL\_DEMO\_ABAP\_DAEMON is a subclass of CL\_ABAP\_DAEMON\_EXT\_BASE and is the ABAP Daemon class for this example. It implements the most important methods of the interface IF\_ABAP\_DAEMON\_EXTENSION and further standalone helper methods. It also implements the interface IF\_ABAP\_TIMER\_HANDLER so that it can be an [ABAP Timer handler](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_timer_handler_glosry.htm "Glossary Entry") for an [ABAP Timer](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_timer_glosry.htm "Glossary Entry"). Although daemons should never be stopped in practice, daemons created by this example are deleted automatically after an hour (if not stopped explicitly first).

-   IF\_ABAP\_DAEMON\_EXTENSION~ON\_ACCEPT

METHOD if\_abap\_daemon\_extension~on\_accept.
  TRY.
      DATA(caller) = i\_context\_base->get\_start\_caller\_info( )-program.
      IF caller = 'CL\_DEMO\_ABAP\_DAEMON\_BROKER====CP'.
        e\_setup\_mode = co\_setup\_mode-accept.
      ENDIF.
    CATCH cx\_abap\_daemon\_error.
      RETURN.
  ENDTRY.
ENDMETHOD.

Before the daemon is started, this method checks whether the calling program is the class pool of the class CL\_DEMO\_ABAP\_DAEMON\_BROKER. Only in this case is the output parameter E\_SETUP\_MODE set so that the daemon can be started.

-   IF\_ABAP\_DAEMON\_EXTENSION~ON\_START

METHOD if\_abap\_daemon\_extension~on\_start.
  TRY.
      set\_context( context = i\_context
                   version = i\_context->get\_start\_parameter(
                                          )->get\_field(
                                             i\_name = \`Version\` ) ).
      write\_log( |Daemon started as version {
                    i\_context->get\_application\_parameter(
                       )->get\_field( i\_name = \`Version\` )
                  } on { sy-host }| ).
    CATCH cx\_ac\_message\_type\_pcp\_error
          cx\_abap\_daemon\_error
          cx\_abap\_timer\_error INTO DATA(exc).
      write\_log( \`Exception, \` && exc->get\_text( ) ).
  ENDTRY.
ENDMETHOD.

Directly after the daemon is started, this method calls the helper method SET\_CONTEXT, which saves context information and starts a timer. One example of context information here is the version number passed by the caller when the daemon is started.

-   IF\_ABAP\_DAEMON\_EXTENSION~ON\_MESSAGE

METHOD if\_abap\_daemon\_extension~on\_message.
  TRY.
      DATA(type) = i\_message->get\_field( i\_name = \`Type\` ).
      CASE type.
        WHEN \`msg\`.
          write\_log(
            |Message "{ i\_message->get\_text( )
              }" received on { sy-host }| ).
        WHEN \`amc\`.
          write\_log( \`Sending AMC message in daemon\` ).
          send\_amc( \`Hello from daemon\` ).
        WHEN \`err\`.
          write\_log( \`Raising exception in daemon\` ).
          MESSAGE \`Type X message in daemon\` TYPE 'X'.
        WHEN \`blk\`.
          write\_log( \`Executing blocking statement in daemon\` ).
          WAIT UP TO 1 SECONDS.
        WHEN \`rst\`.
          write\_log( \`Restarting from daemon\` ).
          i\_context->restart( ).
        WHEN \`rlo\`.
          write\_log( \`Relocating daemon\` ).
          relocate( ).
        WHEN \`stp\`.
          write\_log( \`Stopping from daemon\` ).
          i\_context->stop( ).
      ENDCASE.
    CATCH cx\_ac\_message\_type\_pcp\_error
          cx\_abap\_daemon\_error INTO DATA(exc).
      write\_log( \`Exception, \` && exc->get\_text( ) ).
  ENDTRY.
ENDMETHOD.

This method evaluates the inbound [PCP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpcp_glosry.htm "Glossary Entry") messages and performs the actions in question directly or calls helper methods from the ABAP Daemon class.

-   IF\_ABAP\_DAEMON\_EXTENSION~ON\_ERROR

METHOD if\_abap\_daemon\_extension~on\_error.
  set\_context( i\_context ).
  TRY.
      write\_log(
        \`Daemon restarted after error and version increased to \` &&
         i\_context->get\_application\_parameter(
                      )->get\_field( i\_name = \`Version\` ) ).
    CATCH cx\_ac\_message\_type\_pcp\_error
          cx\_abap\_daemon\_error INTO DATA(exc).
      write\_log( \`Exception, \` && exc->get\_text( ) ).
  ENDTRY.
ENDMETHOD.

IF\_ABAP\_DAEMON\_EXTENSION~ON\_RESTART

METHOD if\_abap\_daemon\_extension~on\_restart.
  set\_context( i\_context ).
  TRY.
      write\_log(
        \`Daemon restarted and version increased to \` &&
         i\_context->get\_application\_parameter(
                      )->get\_field( i\_name = \`Version\` ) ).
    CATCH cx\_ac\_message\_type\_pcp\_error
          cx\_abap\_daemon\_error INTO DATA(exc).
      write\_log( \`Exception, \` && exc->get\_text( ) ).
  ENDTRY.
ENDMETHOD.

These methods call the helper method SET\_CONTEXT to set the context information again after a restart.

-   IF\_ABAP\_DAEMON\_EXTENSION~ON\_SERVER\_SHUTDOWN

METHOD if\_abap\_daemon\_extension~on\_server\_shutdown.
  relocate( ).
ENDMETHOD.

When the current AS Instance is shut down, this method calls the helper method RELOCATE to move the daemon to a different AS Instance.

-   IF\_ABAP\_TIMER\_HANDLER~ON\_TIMEOUT

METHOD if\_abap\_timer\_handler~on\_timeout.
  TRY.
      write\_log( \`Timeout reached, stopping daemon\` ).
      daemon\_context->stop( ).
    CATCH cx\_abap\_daemon\_error INTO DATA(exc).
      write\_log( \`Exception, \` && exc->get\_text( ) ).
  ENDTRY.
ENDMETHOD.

In the case of a timeout event of the [ABAP Timer](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_timer_glosry.htm "Glossary Entry") set in SET\_CONTEXT, this method stops the daemon.

-   SET\_CONTEXT

METHOD set\_context.
  daemon\_context = context.
  TRY.
      DATA(pcp) = cl\_ac\_message\_type\_pcp=>create( ).
      pcp->set\_field(
        i\_name = \`Version\`
        i\_value = COND #(
                    WHEN version IS NOT SUPPLIED
                      THEN context->get\_application\_parameter(
                             )->get\_field( i\_name = \`Version\` ) + 1
                      ELSE version ) ).
      context->set\_application\_parameter( i\_parameter = pcp ).
      cl\_abap\_timer\_manager=>get\_timer\_manager(
        )->start\_timer(
          i\_timer\_handler = me
          i\_timeout = 3600 \* 1000 ).
      write\_log( \`Daemon timeout set to one hour\` ).
    CATCH cx\_ac\_message\_type\_pcp\_error
          cx\_abap\_daemon\_error
          cx\_abap\_timer\_error INTO DATA(exc).
      write\_log( \`Exception, \` && exc->get\_text( ) ).
  ENDTRY.
ENDMETHOD.

This method sets an attribute of the class to the context object and uses its method SET\_APPLICATION\_PARAMETER to save the current version number in the [ABAP Daemon memory](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_memory_glosry.htm "Glossary Entry") in [PCP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpcp_glosry.htm "Glossary Entry") format. If SET\_CONTEXT is called after a restart, the previous version number is fetched from the ABAP Daemon memory and raised by 1. Furthermore, SET\_CONTEXT initializes an [ABAP Timer](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_timer_glosry.htm "Glossary Entry") responded to by the method IF\_ABAP\_TIMER\_HANDLER~ON\_TIMEOUT of the current daemon.

-   SEND\_AMC

METHOD send\_amc.
  TRY.
      CAST if\_amc\_message\_producer\_text(
             cl\_amc\_channel\_manager=>create\_message\_producer(
               i\_application\_id = 'DEMO\_AMC'
               i\_channel\_id     = '/demo\_text'
               i\_suppress\_echo  = 'X' )
        )->send( i\_message = msg ).
    CATCH cx\_amc\_error INTO DATA(amc\_exc).
      write\_log( \`Exception, \` && amc\_exc->get\_text( ) ).
  ENDTRY.
ENDMETHOD.

This method sends an [AMC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamc_glosry.htm "Glossary Entry") message.

-   RELOCATE

METHOD relocate.
  DATA list TYPE TABLE OF msxxlist WITH EMPTY KEY.
  CALL FUNCTION 'TH\_SERVER\_LIST'
    TABLES
      list   = list
    EXCEPTIONS
      OTHERS = 4.
  IF sy-subrc <> 0 OR lines( list ) < 2.
    write\_log( \`No other application server available\`).
    RETURN.
  ENDIF.
  DELETE list WHERE host = sy-host.
  DATA(server) = list\[
    cl\_abap\_random\_int=>create(
      seed = CONV #( sy-uzeit )
      min  = 1
      max  = lines( list ) )->get\_next( ) \].
  TRY.
      IF cl\_demo\_abap\_daemon\_broker=>start\_daemon(
            pcp = daemon\_context->get\_application\_parameter( )
            destination = server-name ).
        write\_log( \`Daemon relocated to \` && server-host && \` \`  ).
        daemon\_context->stop( ).
      ELSE.
        write\_log( \`Daemon not accepted on \` && server-host ).
      ENDIF.
    CATCH cx\_abap\_daemon\_error INTO DATA(exc).
      write\_log( \`Exception, \` && exc->get\_text( ) ).
  ENDTRY.
ENDMETHOD.

This method attempts to move the current daemon to a different AS Instance. To do this, an AS Instances is selected at random from a list in the current AS ABAP. This application server is then used as a destination for starting a daemon of the current ABAP Daemon class using CL\_ABAP\_DAEMON\_BROKER. Here, the current context information from the [ABAP Daemon memory](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_memory_glosry.htm "Glossary Entry") is passed directly as start parameters in [PCP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpcp_glosry.htm "Glossary Entry") format. The current daemon is then stopped.

-   WRITE\_LOG

METHOD write\_log.
  DATA ts TYPE timestampl.
  GET TIME STAMP FIELD ts.
  DATA(daemon\_log) = \`\`.
  IMPORT daemon\_log = daemon\_log
         FROM DATABASE demo\_indx\_blob(dm)
         ID cl\_demo\_abap\_daemon\_broker=>daemon\_log.
  daemon\_log = daemon\_log && |{ ts TIMESTAMP = ISO }: { msg }\\n|.
  EXPORT daemon\_log = daemon\_log
         TO DATABASE demo\_indx\_blob(dm)
         ID cl\_demo\_abap\_daemon\_broker=>daemon\_log.
  COMMIT CONNECTION default.
ENDMETHOD.

This method writes log entries to the [export/import table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexport_import_table_glosry.htm "Glossary Entry") DEMO\_INDX\_BLOB as a string. It is called by the other methods to log the actions of the daemon for the output of the program DEMO\_ABAP\_DAEMON.

In this example, the remaining methods of the interface IF\_ABAP\_DAEMON\_EXTENSION only write log entries.

Note

This simple example does not guarantee that an ABAP Daemon in the ABAP Daemon class CL\_ABAP\_DAEMON is a system-wide singleton. Any parallel reads that cause restarts can be the source of multiple unwanted daemons. This applies in particular when moving daemons to other AS Instances. A great deal more work is required to create a real singleton. See the class CL\_AD\_EXT\_SIMPLE\_DAEMON, which can be used by the program RS\_ABAP\_DAEMON\_TEST.


### abenabap_daemon_abexas.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) →  [ADF - ABAP Daemon Framework](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon.htm) → 

Examples for ABAP Daemons

Continue
![Example](exa.gif "Example") [ADF, Mini ABAP Daemon](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_mini_daemon_abexa.htm)
![Example](exa.gif "Example") [ADF, Creating and Using an ABAP Daemon](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_daemon_abexa.htm)
