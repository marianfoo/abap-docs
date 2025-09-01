  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [RFC - Remote Function Call](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrfc.htm) →  [RFC Overview](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrfc_intro_oview.htm) → 

RFC Destination

The information about the target system of an RFC call is stored in the RFC destination.

-   [Static Destinations](#@@ITOC@@ABENRFC_DESTINATION_1)

-   [Dynamic Destinations](#@@ITOC@@ABENRFC_DESTINATION_2)

-   [Predefined Destinations](#@@ITOC@@ABENRFC_DESTINATION_3)

-   [AS Instances as Destinations](#@@ITOC@@ABENRFC_DESTINATION_4)

-   [More Information](#@@ITOC@@ABENRFC_DESTINATION_5)

Static Destinations

The attributes of destinations are defined statically and managed in AS ABAP using the transaction SM59. Every destination managed in transaction SM59 has a unique name that can be specified after the addition [DESTINATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_destination.htm) in RFC. For every destination, a connection type, the partner program, and the target system are defined in transaction SM59. Logon data and further connection options can also be defined in the destination.

Note

The documented function module RFC\_MODIFY\_R3\_DESTINATION edits static destinations managed in transaction SM59.

Dynamic Destinations

In cases whether it is not enough to use the static destinations managed using transaction SM59, the associated attributes can be grouped as a dynamic destination. This is done using the class CL\_DYNAMIC\_DESTINATION. Its method CREATE\_RFC\_DESTINATION creates a text field that can be specified in the current [internal session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session_glosry.htm "Glossary Entry") in RFC after the addition [DESTINATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_function_destination.htm) and interpreted as a destination by the runtime environment. A destination from transaction SM59 can also be used as a template and modified accordingly. The validity of the new destination is not checked until it is used for an RFC.

A dynamic destination has the characters %% as a prefix. These dynamic destinations must only be created using the class CL\_DYNAMIC\_DESTINATION and must never be added to programs from external sources. Further methods in the class make it possible to

-   invalidate a dynamic destination created the current session,

-   check whether a destination added from an external source is a dynamic destination,

-   invalidate any dynamic destinations added from external sources.

Executable Example

[Dynamic RFC Destination](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrfc_dynamic_dest_abexa.htm)

Predefined Destinations

There are two predefined destinations that do not have to be entered using transaction SM59:

-   The destination "NONE"" dictates that the function module starts on the same [AS Instance](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenapplication_server_glosry.htm "Glossary Entry") as the calling program, but using the RFC interface and in a separate [RFC context](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrfc_session_glosry.htm "Glossary Entry") for the current user. This destination is possible for all execution modes.

-   Destination "BACK" can be used in a function module that is called remotely, and links back to the caller. This can only be specified in function modules that have been called synchronously. Destination "BACK" can be used to call each remote-capable function module of the calling system in all three execution types. In synchronous callbacks, the associated relevant function group is loaded into the [internal session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session_glosry.htm "Glossary Entry") of the calling program, if it does not yet exist there. The existent RFC connection is used for this callback.

Notes

-   If the predefined destination "NONE" is used, no logon data or password must be specified when the user session is opened. If an RFC is performed for the current AS Instance using a destination defined in the transaction SM59, the settings on the application server dictate whether logon data needs to be specified or not.

-   The logon data (user name, client, and logon language) for an RFC session with the destination "NONE" is taken implicitly from the calling session. The [text environment language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_env_langu_glosry.htm "Glossary Entry") of the calling session must be used for the [logon language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogon_language_glosry.htm "Glossary Entry") (and not the logon language of the session). The text environment language can be set using the statement [SET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_locale.htm).

AS Instances as Destinations

Alongside destinations from transaction SM59, the dynamic destinations, and the two predefined destinations, destinations can also be specified directly using the name of an AS Instance, as returned by the method GET\_INSTANCE\_NAME of the system class CL\_ABAP\_SYST This name has the form hostname\_sysid\_instnr. Here, hostname is the name of the [host computer](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhost_computer_glosry.htm "Glossary Entry") of the AS Instance, sysid is the name of the AS ABAP, and instnr is the instance number of the AS Instance, as display, for example, in SM51.

The only systems that an be reached like this are the current systems or systems connected using a [trust relationship](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensmt1_2.htm). For the current system, the logon data of the current user is used. For other systems, a logon is necessary.

Note

This data can be specified dynamically without presenting a security risk.

More Information

A detailed description of the RFC destination can be found in under: RFC documentation on [SAP Help Portal](http://help.sap.com).