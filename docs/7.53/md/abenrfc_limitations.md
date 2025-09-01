  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [RFC - Remote Function Call](javascript:call_link\('abenrfc.htm'\)) →  [RFC Overview](javascript:call_link\('abenrfc_intro_oview.htm'\)) → 

RFC Restrictions

In contrast to the normal function module call, the following restrictions apply to an RFC:

-   [Pass-by value](javascript:call_link\('abenpass_by_value_glosry.htm'\) "Glossary Entry") must be selected for the IMPORTING, EXPORTING, and CHANGING parameters of a [remote-enabled function module](javascript:call_link\('abenremote_enabled_fm_glosry.htm'\) "Glossary Entry"). This cannot be specified explicitly for TABLES parameters, but are used implicitly for RFC.

-   The formal parameter of a [remote-enabled function module](javascript:call_link\('abenremote_enabled_fm_glosry.htm'\) "Glossary Entry") must be typed using data types from ABAP Dictionary or using built-in ABAP types. Data types from [type groups](javascript:call_link\('abentype_group_1_glosry.htm'\) "Glossary Entry") cannot be specified.

-   No [reference variables](javascript:call_link\('abenreference_variable_glosry.htm'\) "Glossary Entry") can be passed in RFCs. The [formal parameters](javascript:call_link\('abenformal_parameter_glosry.htm'\) "Glossary Entry") of a [remote-enabled function module](javascript:call_link\('abenremote_enabled_fm_glosry.htm'\) "Glossary Entry") cannot, therefore, be typed using a [reference type](javascript:call_link\('abenreference_type_glosry.htm'\) "Glossary Entry").

-   A [database commit](javascript:call_link\('abendb_commit.htm'\)) is performed in every call that uses synchronous and asynchronous RFC. For this reason, synchronous or asynchronous RFC must not be used between ABAP SQL statements that open or close a [database cursor](javascript:call_link\('abendatabase_cursor_glosry.htm'\) "Glossary Entry"). An exception to this are [updates](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry"). When updates are running, [sRFC](javascript:call_link\('abensrfc_glosry.htm'\) "Glossary Entry") and [aRFC](javascript:call_link\('abensrfc_glosry.htm'\) "Glossary Entry") do not cause work processes to be switched or database commits to be executed.

-   In a remotely called function module, no statements can be called that close the current [RFC session](javascript:call_link\('abenrfc_session_glosry.htm'\) "Glossary Entry") and hence the connection. An example of this is the statement LEAVE PROGRAM, or SUBMIT without the addition RETURN.

-   As only pass by value is used for the RFC, when exceptions do occur, you can never access interim results when a synchronous RFC is made. TABLES parameters are an exception to this. When the exception SYSTEM\_FAILURE is raised, these parameters behave in the same way as when the function module is executed locally, in which case they are passed by reference. The data held by a parameter of this type before the exception is passed to the client.

-   When passing character-like data, there is usually a conversion between the participating [code pages](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry"). When data is passed between [MDMP systems](javascript:call_link\('abenmdmp-system_glosry.htm'\) "Glossary Entry") and [Unicode systems](javascript:call_link\('abenunicode_system_glosry.htm'\) "Glossary Entry"), the mapping might not be unique. For structures defined in ABAP Dictionary, the [text language](javascript:call_link\('abentext_language_glosry.htm'\) "Glossary Entry") is evaluated when the binary [RFC protocol](javascript:call_link\('abenrfc_protocol.htm'\)) is used.

-   [Information messages](javascript:call_link\('abeninformation_message_glosry.htm'\) "Glossary Entry") and [warnings](javascript:call_link\('abenwarning_glosry.htm'\) "Glossary Entry") are handled like [status messages](javascript:call_link\('abenstatus_message_glosry.htm'\) "Glossary Entry").

-   In background RFC calls ([bgRFC](javascript:call_link\('abenbgrfc_glosry.htm'\) "Glossary Entry") and the obsolete [tRFC](javascript:call_link\('abentrfc_2_glosry.htm'\) "Glossary Entry") and [qRFC](javascript:call_link\('abenqrfc_glosry.htm'\) "Glossary Entry")), the statements [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)) and [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\)) must not be executed within a Unit/LUW. In addition, no implicit [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") can be triggered there.