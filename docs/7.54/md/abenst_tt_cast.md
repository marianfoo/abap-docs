  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [ST - Simple Transformations](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Serialization and Deserialization](javascript:call_link\('abenst_serial_deserial.htm'\)) →  [ST - Value Assignments](javascript:call_link\('abenst_assignments.htm'\)) → 

ST - tt:cast, Down Cast

Syntax

<tt:cast *\[*to-ref="node"*|*to-var="variable"*\]*
         *\[*ref="node"*|*var="variable"*\]* />

Effect

The statement tt:cast can be used to assign the content of one reference variable to another reference variable, if the static type of the source variable is more general than the static type of the target variable. This is called a [down cast](javascript:call_link\('abendown_cast_glosry.htm'\) "Glossary Entry").

The statement tt:cast is a special case of the statement [tt:assign](javascript:call_link\('abenst_tt_assign.htm'\)), in which only reference variables can be declared as source fields and target fields. Reference variables can be declared as follows:

-   A node node declared in accordance with the [addressing rules](javascript:call_link\('abenst_addressing.htm'\)) and to which an ABAP reference variable is bound

-   A [variable](javascript:call_link\('abenst_tt_variable.htm'\)) or [parameter](javascript:call_link\('abenst_tt_parameter.htm'\)) variable defined as a reference variable using tt:ref-type.

If downcasting is not successful (if the static type of the target variable is less general than the dynamic type of the source variable when the statement runs), the ST program terminates with exception CX\_ST\_RUNTIME\_ERROR.