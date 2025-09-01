  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [Remote Function Call (RFC)](javascript:call_link\('abenrfc.htm'\)) →  [RFC - Overview](javascript:call_link\('abenrfc_intro_oview.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: RFC - Destination, ABENRFC_DESTINATION, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0A
Suggestion for improvement:)

RFC - Destination

The information about the target system of an RFC call is specified by the RFC destination.

-   [Static Destinations](#abenrfc-destination-1-------dynamic-destinations---@ITOC@@ABENRFC_DESTINATION_2)
-   [Predefined Destinations](#abenrfc-destination-3-------as-instances-as-destinations---@ITOC@@ABENRFC_DESTINATION_4)
-   [More Information](#@@ITOC@@ABENRFC_DESTINATION_5)

Static Destinations   

The properties of destinations are defined statically and managed in AS ABAP using the transaction SM59. Every destination managed in transaction SM59 has a unique name that can be used to specify the destination after the addition [DESTINATION](javascript:call_link\('abapcall_function_destination.htm'\)) in RFC. For every destination, a connection type, the partner program, and the target system are defined in transaction SM59. Logon data and further connection options can also be defined in the destination.

Hint

The documented function module RFC\_MODIFY\_R3\_DESTINATION processes static destinations managed in transaction SM59.

Dynamic Destinations   

In cases where it is not sufficient to use the static destinations managed using transaction SM59, the associated properties can be combined to form a dynamic destination. This is done using the class CL\_DYNAMIC\_DESTINATION. Its method CREATE\_RFC\_DESTINATION creates a text field that can be specified in the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") in RFC after the addition [DESTINATION](javascript:call_link\('abapcall_function_destination.htm'\)) and is interpreted as a destination by the runtime framework. A destination from transaction SM59 can also be used as a template and modified accordingly. The validity of the new destination is not checked until it is used for an RFC.

A dynamic destination has the characters %% as a prefix. These dynamic destinations should now only be created using the class CL\_DYNAMIC\_DESTINATION and must never be copied to programs from outside. Further methods in the class make it possible to

-   invalidate a dynamic destination created for the current session,
-   check whether a destination entered from an external source is a dynamic destination,
-   invalidate any dynamic destinations entered from external sources, if necessary.

Executable Example

[Dynamic RFC Destination](javascript:call_link\('abenrfc_dynamic_dest_abexa.htm'\))

Predefined Destinations   

There are three predefined destinations that do not have to be maintained using transaction SM59:

-   NONE
    
    With destination NONE the function module starts in the same [AS instance](javascript:call_link\('abenas_instance_glosry.htm'\) "Glossary Entry") as the calling program, but using the RFC interface and in a separate [RFC session](javascript:call_link\('abenrfc_session_glosry.htm'\) "Glossary Entry") for the current user. This destination is possible for all execution modes.
    
-   SELF
    
    Destination SELF works as NONE but uses the [RFC protocol](javascript:call_link\('abenrfc_protocol.htm'\)) fast serialization.
    
-   BACK
    
    Destination BACK can be used in a function module that is called remotely and refers back to the caller. This specification is only possible in function modules that were called synchronously. The destination BACK can be used to call any remote-capable function module of the calling system in all three execution types. In synchronous callbacks, the associated relevant function pool is loaded into the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") of the calling program, if it does not yet exist there. The existing RFC connection is used for the callback.
    

Hints

-   If the predefined destination NONE is used, no logon data or password must be specified when the user session is opened. If an RFC is performed for the current AS instance using a destination maintained in the transaction SM59, it depends on the settings on the application server whether logon data needs to be specified or not.
-   The logon data user name, client, and logon language for an RFC session with the destination NONE is taken implicitly from the calling session. The [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") of the calling session must be used for the [logon language](javascript:call_link\('abenlogon_language_glosry.htm'\) "Glossary Entry") instead of the logon language of the session. The text environment language can be set using the statement [SET LOCALE LANGUAGE](javascript:call_link\('abapset_locale.htm'\)).

AS instances as Destinations   

In addition to the destinations created in transaction SM59, the dynamic destinations, and the two predefined destinations, destinations can also be specified directly using the name of an AS instance, as returned by the method GET\_INSTANCE\_NAME of the system class CL\_ABAP\_SYST. This name has the form hostname\_sysid\_instnr. Here, hostname is the name of the [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") of the AS instance, sysid is the name of the AS ABAP, and instnr is the instance number of the AS instance, for example as displayed using transaction SM51.

The only systems that can be reached like this are the current systems or systems connected by a [trust relationship](javascript:call_link\('abensmt1_2.htm'\)). For the current system, the logon data of the current user is used. For other systems, a logon is necessary.

Hint

This specification can also be composed dynamically without posing a security risk.

More Information   

For a detailed description of the RFC destination, see the documentation RFC in SAP Help Portal.