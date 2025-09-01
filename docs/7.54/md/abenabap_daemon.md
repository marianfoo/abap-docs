---
title: "ADF - ABAP Daemon Framework"
description: |
  ABAP Daemon Framework (ADF for short) is an application programming interface (or API) used to create and handle ABAP Daemons(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_glosry.htm 'Glossary Entry'). An ABAP Daemon is an instance of an ABAP Daemon class(https://hel
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon.htm"
abapFile: "abenabap_daemon.htm"
keywords: ["delete", "do", "if", "case", "try", "method", "class", "data", "internal-table", "abenabap", "daemon"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) → 

ADF - ABAP Daemon Framework

ABAP Daemon Framework (ADF for short) is an application programming interface (or API) used to create and handle [ABAP Daemons](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_glosry.htm "Glossary Entry"). An ABAP Daemon is an instance of an [ABAP Daemon class](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_class_glosry.htm "Glossary Entry") that is persisted in a special [ABAP Daemon session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_session_glosry.htm "Glossary Entry"). Every AS Instance in an AS ABAP has access to any of the daemons in this AS ABAP. ABAP programs themselves use [ABAP Daemon Manager](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_manager_glosry.htm "Glossary Entry") to access ABAP Daemons.

The only limit on the lifetime of an ABAP Daemon not stopped explicitly using ADF methods is the lifetime of the AS Instance where it is running. An ABAP Daemon is created again automatically every time a [runtime error](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenruntime_error_glosry.htm "Glossary Entry") or a [message](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmessage_glosry.htm "Glossary Entry") of type E, A, or X causes it to terminate a program. When the AS Instance of a daemon is shut down, the daemon can be moved to another AS Instance by creating a new daemon containing the same context information as the preceding daemon. This enables the new daemon to do the same job.

The [processing of an ABAP Daemon](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_processing_glosry.htm "Glossary Entry") takes place in the background and is event-driven. Both the consumer of a daemon and the ABAP runtime environment can raise [ABAP Daemon events](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_event_glosry.htm "Glossary Entry") and the daemon can respond to these events using predefined interface methods. A daemon must always be ready to respond to inbound events and this is ensured by running ABAP Daemon processing in a [non-blocking mode](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadf_non_blocking_model.htm).

-   [ABAP Daemon Classes](#abenabap-daemon-1--------creating-and-using-abap-daemons---@ITOC@@ABENABAP_DAEMON_2)

-   [Managing ABAP Daemons](#abenabap-daemon-3--------abap-daemon-examples---@ITOC@@ABENABAP_DAEMON_4)

Notes

-   ABAP Daemons can be used as event handlers with long lifetimes, for example to respond to changes in shared internal or external AS ABAP resources.

-   More details about ABAP Daemon Framework can be found under ABAP Daemons.

ABAP Daemon Classes

An [ABAP Daemon class](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_class_glosry.htm "Glossary Entry") is a global class that inherits from the abstract system class CL\_ABAP\_DAEMON\_EXT\_BASE and it must also be possible to create public instances of this daemon class. From the superclass, an ABAP Daemon class inherits the methods of the interface IF\_ABAP\_DAEMON\_EXTENSION that it uses to respond to [ABAP Daemon events](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_event_glosry.htm "Glossary Entry") if they are implemented in the ABAP Daemon class.

-   ON\_ACCEPT

This method is executed before the daemon is actually started. The return value of the method has the type ABAP\_DAEMON\_SETUP\_MODE from ABAP Dictionary and must be set to a value dictated by the components of the constant structure CO\_SETUP\_MODE of the interface IF\_ABAP\_DAEMON\_EXTENSION. The daemon start is accepted or rejected using these values. The method can be implemented to decide whether the start is accepted or not. For example, user-dependent authorizations can be evaluated and the start of the daemon can be limited to specific programs. To do this, the object passed in the input parameter I\_CONTEXT\_BASE of the static type IF\_ABAP\_DAEMON\_CONTEXT\_BASE can be evaluated. Its methods, GET\_START\_PARAMETER and GET\_START\_CALLER\_INFO, return the required information. They behave in the same way as the identically named methods of a context object.

-   ON\_START

This method is executed when a daemon is started using the method START in [ABAP Daemon Managers](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_manager_glosry.htm "Glossary Entry") and directly after an instance of the daemon is executed. The daemon can be initialized in its implementation in the following ways:

-   How context information is saved in [ABAP Daemon Memory](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_memory_glosry.htm "Glossary Entry") or to other suitable memory areas, such as [shared memory](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshared_memory_glosry.htm "Glossary Entry") or database tables.

-   How [ABAP Messaging Channels](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_messaging_channel_glosry.htm "Glossary Entry") are bound for communication with consumers.

-   Whether an [ABAP Timer](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_timer_glosry.htm "Glossary Entry") is created to limit the lifetime of the daemon if required.

-   ON\_MESSAGE

This method is executed when the daemon receives a [PCP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpcp_glosry.htm "Glossary Entry") message sent using the method SEND of an [ABAP Daemon handle](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_handle_glosry.htm "Glossary Entry"). To do this, the method ATTACH in [ABAP Daemon Manager](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_manager_glosry.htm "Glossary Entry") returns a reference to a daemon handle. The messages in the input parameter I\_MESSAGE can be evaluated in the implementation of the method ON\_MESSAGE.

-   ON\_ERROR

This method is executed after the daemon is restarted automatically due to a [message](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmessage_glosry.htm "Glossary Entry") of the type E, A, or X or because of a [runtime error](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenruntime_error_glosry.htm "Glossary Entry"). A runtime error closes the [internal session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session_glosry.htm "Glossary Entry") of the daemon, deletes the associated [ABAP memory](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_memory_glosry.htm "Glossary Entry"), and produces a [short dump](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshort_dump_glosry.htm "Glossary Entry"). The automatic restart opens a new internal session. The context of the daemon can be restored in the implementation of the method by accessing context information preserved in the [ABAP Daemon memory](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_memory_glosry.htm "Glossary Entry") or in another repository, The input parameter I\_CODE contains information about the source of the runtime error. Runtime errors should be avoided in the method ON\_ERROR itself If a runtime error does occur here, the execution of the next method is delayed by 30 seconds.

-   ON\_RESTART

This method is executed when the daemon is restarted using its context object or after the event ON\_BEFORE\_RESTART\_BY\_SYSTEM (see below). The context of the daemon can be restored in the implementation of the method by accessing context information preserved in the [ABAP Daemon memory](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_memory_glosry.htm "Glossary Entry") or in another repository,

-   ON\_SERVER\_SHUTDOWN

This method is executed when the current AS Instance is shut down. This method can be implemented so that the daemon is moved to another free AS Instance (if available) by starting a new daemon here with the same context information. The daemon is stopped automatically after this method is executed.

-   ON\_SYSTEM\_SHUTDOWN

This method is executed when the current AS ABAP is shut down. This method can be implemented to include cleanup activities, such as deleting temporary daemon data in persistent repositories. The daemon is stopped automatically after this method is executed.

-   ON\_BEFORE\_RESTART\_BY\_SYSTEM

This method is executed when an inconsistent state is detected in the daemon. This can occur when programs used by a daemon are modified and need to be reloaded. If necessary, this method can be implemented to perform appropriate tasks, such as updating the saved context information. After this method is executed, a restart is performed automatically and the method ON\_RESTART runs.

-   ON\_STOP

This method is executed when the daemon is stopped using the method STOP in [ABAP Daemon Manager](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_manager_glosry.htm "Glossary Entry") or using its context object (see below). This method can be implemented to include cleanup activities, such as deleting temporary daemon data in the relevant memory areas. In the input parameter I\_MESSAGE, the method is sent the [PCP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpcp_glosry.htm "Glossary Entry") message, which can be passed when the daemon is stopped (this is optional).

Except for ON\_ACCEPT, each of these methods has an input parameter I\_CONTEXT with the static type IF\_ABAP\_DAEMON\_CONTEXT that points to a context object. The context object has interface methods that handle context information about the current daemon or that stop or restart it:

-   GET\_START\_PARAMETER

This method returns the [PCP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpcp_glosry.htm "Glossary Entry") message that was passed to [ABAP Daemon Manager](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_manager_glosry.htm "Glossary Entry") when the daemon was started.

-   GET\_START\_CALLER\_INFO

This method returns information about the context of the consumer of the daemon, such as the client, user name, or ABAP program in a structure of the type ABAP\_DAEMON\_START\_CALLER\_INFO.

-   GET\_INSTANCE\_ID

This method returns the unique internal ID of the current daemon.

-   SET\_APPLICATION\_PARAMETER

This method writes data to the [ABAP Daemon memory](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_memory_glosry.htm "Glossary Entry") in [PCP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpcp_glosry.htm "Glossary Entry") format. Here, this data is assigned to the current daemon. Here, they are preserved for the full lifetime of the daemon (including any restarts). If SET\_APPLICATION\_PARAMETER is repeated, all existing data is overwritten.

-   GET\_APPLICATION\_PARAMETER

This method reads the latest data written using SET\_APPLICATION\_PARAMETER from the [ABAP Daemon memory](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_memory_glosry.htm "Glossary Entry").

-   RESTART

This method restarts the current daemon with the same internal ID. This deletes the internal session of the daemon with all associated memories, such as the [ABAP memory](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_memory_glosry.htm "Glossary Entry"), and opens a new internal session. The restart raises the event ON\_RESTART.

-   STOP

This method stops the current daemon and raises the event ON\_STOP at the same time.

An ABAP Daemon class can contain further helper methods and can call any number of other procedures in its methods. The implementation of an ABAP Daemon class and the procedures it calls must be executable in [non-blocking mode](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadf_non_blocking_model.htm) to prevent the runtime error DAEMON\_ILLEGAL\_STATEMENT in [ABAP Daemon processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_processing_glosry.htm "Glossary Entry") and a subsequent restart of the daemon.

Notes

-   To write context information, it is advisable to create a central helper method that is called by the methods ON\_START, ON\_ERROR, and ON\_RESTART. The [ABAP Daemon memory](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_memory_glosry.htm "Glossary Entry") associated with the daemon is particularly well suited for this task, although other repositories can also be used, such as the shared memory or database tables.

-   The interface IF\_ABAP\_TIMER\_HANDLER can be implemented to turn an ABAP Daemon class into an [ABAP Timer handler](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_timer_handler_glosry.htm "Glossary Entry") too and hence make it able to respond to [ABAP Timer](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_timer_glosry.htm "Glossary Entry") events. This makes it possible, for example, to wait for certain events or to stop the daemon after a defined period of time.

Creating and Using ABAP Daemons

ABAP Daemons are created and consumed using the static methods of the class CL\_ABAP\_DAEMON\_CLIENT\_MANAGER in ABAP Daemon Manager. The following rules apply here:

-   An ABAP Daemon can be created and used from any ABAP program.

-   An ABAP Daemon can only be used in the same AS ABAP as the program it was created by and the [ABAP Daemon session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_session_glosry.htm "Glossary Entry") always has the same [client ID](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_identifier_glosry.htm "Glossary Entry") as the current [user session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuser_session_glosry.htm "Glossary Entry"). No predefined restrictions exist for the user who is using the program in question.

-   Only the program that created an ABAP Daemon using ABAP Daemon Manager can use this daemon in ABAP Daemon Manager. If any other programs attempt this, an exception is raised. It is also not possible for a daemon to access itself using ABAP Daemon Manager. If multiple programs need to access the same daemon, it is best to wrap these ABAP Daemon Manager reads in a class whose class pool is the only program that can access this daemon.

ABAP Daemon Manager (or the class CL\_ABAP\_DAEMON\_CLIENT\_MANAGER) has the following methods:

-   START

This method starts an ABAP Daemon of an ABAP Daemon class passed to the input parameter I\_CLASS\_NAME under a name passed to the input parameter I\_NAME. This daemon is started only when permitted by the interface method ON\_ACCEPT of the ABAP Daemon class. When the daemon is started, a new [ABAP Daemon session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_session_glosry.htm "Glossary Entry") is opened whose [client ID](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_identifier_glosry.htm "Glossary Entry") is adopted by the current user session and whose [user name](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuser_name_glosry.htm "Glossary Entry") and [logon language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogon_language_glosry.htm "Glossary Entry") are determined using an [RFC destination](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendestination_glosry.htm "Glossary Entry") that can be passed to the input parameter I\_DESTINATION (this is optional). The default value is the predefined RFC destination NONE. An explicitly specified RFC destination must meet the following prerequisites:

-   It must be an internal connection to the same AS ABAP.

-   It must be an ABAP connection (with or without load distribution).

-   A client ID used in the RFC destination must be the same ID as used in the current user session.

-   An AS Instance specified as hostname\_sysid\_instnr must belong to the current AS ABAP.

The input parameter I\_PRIORITY can be used to specify a priority for the response of the daemon to [ABAP Daemon events](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_event_glosry.htm "Glossary Entry"). The input parameter I\_PARAMETER can be used to pass a [PCP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpcp_glosry.htm "Glossary Entry") message to the daemon as a start parameter and the daemon can access this message using its context object.

The output parameter E\_SETUP\_MODE gets the return value of the interface method ON\_ACCEPT of the ABAP Daemon class. The output parameter E\_INSTANCE\_ID gets the internal ID of the started daemon, which is used by ABAP Daemon Manager to access this daemon.

-   ATTACH

In its return value with the static type IF\_ABAP\_DAEMON\_HANDLE, this method returns a reference to an [ABAP Daemon handle](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_handle_glosry.htm "Glossary Entry") for the daemon whose internal ID was passed to the input parameter I\_INSTANCE\_ID. The method SEND of the daemon handle can be used by the consumer to send [PCP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpcp_glosry.htm "Glossary Entry") messages to the daemon and the daemon can handle these messages in its interface method ON\_MESSAGE.

-   STOP

This method stops the daemon whose internal ID was passed to the input parameter I\_INSTANCE\_ID. The [ABAP Daemon event](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_event_glosry.htm "Glossary Entry") ON\_STOP is raised first. In the associated method, the daemon can evaluate the [PCP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpcp_glosry.htm "Glossary Entry") passed to the input parameter I\_PARAMETER.

-   GET\_DAEMON\_INFO

Returns an internal table containing information about all ABAP Daemons in the current AS ABAP for the ABAP Daemon class that is passed to the input parameter I\_CLASS\_NAME.

Notes

-   It is advisable to create dedicated [RFC destinations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendestination_glosry.htm "Glossary Entry") for ABAP Daemons with a suitable user:

-   ABAP Daemons run in the background, which means that dialog users should not be used.

-   The user in question should have precisely those authorizations required for daemon processing.

-   One consumer can create multiple ABAP Daemons of an ABAP Daemon class, which can then be distinguished by using different names. It can also be useful, however, to permit just one daemon from an ABAP Daemon class as a singleton in a single AS ABAP. The checks needed here must be provided by the consumer.

-   In most cases, a consumer does not need to know the internal ID of an ABAP Daemon. If the method calls of the ABAP Daemon handler are wrapped in a class, as recommended, this class can encapsulate them in a private attribute.

-   A consumer can communicate with an ABAP Daemon only by using [PCP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpcp_glosry.htm "Glossary Entry") messages.

-   On its own, the method GET\_DAEMON\_INFO in ABAP Daemon Manager is not enough to create an ABAP Daemon as a system-wide singleton. Parallel reads can be used to start multiple daemons in the same ABAP Daemon class before they are returned by GET\_DAEMON\_INFO.

-   Internally, ABAP Daemons are handled using the [RFC interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrfc_interface_glosry.htm "Glossary Entry"). Accordingly, a consumer of daemons must also have the associated [RFC authorizations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrfc_authority.htm).

-   The class pool of an ABAP Daemon (or the instance of an ABAP Daemon class) is always the only [ABAP session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmain_session_glosry.htm "Glossary Entry") program in its [ABAP Daemon session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_session_glosry.htm "Glossary Entry"), since no program calls are possible in the associated [non-blocking mode](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadf_non_blocking_model.htm).

-   When an ABAP Daemon is stopped or restarted due to an error, its entire context is removed. The associated [ABAP Daemon session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_session_glosry.htm "Glossary Entry") is also ended and, if the daemon is restarted, a new session is started, This affects any context information in the [ABAP Daemon memory](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_memory_glosry.htm "Glossary Entry"), any [ABAP Timers](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_timer_glosry.htm "Glossary Entry") that were started, and all non-persistent data in the associated [ABAP session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmain_session_glosry.htm "Glossary Entry"). More specifically, any [SAP locks](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_lock_glosry.htm "Glossary Entry") that were set are released.

-   It is the task of the consumer to delete any daemon-specific data in the shared memory or other persistent repositories.

-   In cases where a daemon is moved to a different AS Instance, the consumer must also ensure that the settings in question are transferred at the same time.

Managing ABAP Daemons

The transaction SMDAEMON displays the ABAP Daemons on the current AS Instance and they can also be restarted or stopped here.

Note

User-specific [breakpoints](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbreakpoint_glosry.htm "Glossary Entry") can be set when an ABAP Daemon is being processed (namely when the methods of the ABAP Daemon class and the procedures called here are executed) to debug the daemon.

ABAP Daemon Examples

Executable Examples

-   [ADF, Mini ABAP Daemon](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_mini_daemon_abexa.htm)

-   [ADF, Creating and Using an ABAP Daemon](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_abexa.htm)

See also the class CL\_AD\_EXT\_SIMPLE\_DAEMON, which can be used by the program RS\_ABAP\_DAEMON\_TEST. Unlike in the preceding simple examples, this example is more reliable in producing a system-wide singleton ABAP Daemon.

Continue
[ADF - Non-Blocking Mode](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadf_non_blocking_model.htm)
[Examples for ABAP Daemons](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_daemon_abexas.htm)