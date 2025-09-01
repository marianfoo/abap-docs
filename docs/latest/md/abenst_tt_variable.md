  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [Simple Transformations (ST)](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Structure of ST Programs](javascript:call_link\('abenst_programs_structure.htm'\)) →  [ST - Data Declarations](javascript:call_link\('abenst_data_declarations.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ST%20-%20tt%3Avariable%2C%20Variables%2C%20ABENST_TT_VARIABLE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ST - tt:variable, Variables

Syntax

<tt:variable name="..." *\[*ref-type="..."*\]*
                        *\[**\[*s-val="..."*\]**\[*d-val="..."*\]**\]**|**\[*val="..."*\]* />

Effect

The statement tt:variable can be used to declare one or more variables in an ST program outside of a template. The attribute name is used to declare a symbolic name, which can be used to access the variable. This name can have a maximum of 30 characters.

The symbolic name is not case-sensitive and must be unique. The namespace also includes the data roots declared with [tt:root](javascript:call_link\('abenst_tt_root.htm'\)) and the parameters declared with [tt:parameter](javascript:call_link\('abenst_tt_parameter.htm'\)).

The variables in the context of the [main template](javascript:call_link\('abenst_tt_template_main.htm'\)) can be addressed directly. The variables of the main template are not known in [subtemplates](javascript:call_link\('abenst_tt_template_sub.htm'\)).

Variables are data of the ST program that, unlike the data roots, are not bound to ABAP data objects.

ref-type can be used to define the variable as a reference variable. The value of ref-type determines the static type of the reference variable. All global ABAP classes and interfaces for an object reference variable are possible, as are data types for a data reference variable. The names of classes and interfaces are specified directly and without namespaces. The names of data types must be specified using an XML namespace that determines the context of the data type, as with [tt:type](javascript:call_link\('abenst_tt_type.htm'\)). Class reference variables and interface reference variables are intended primarily for creating objects and calling instance methods. Data reference variables, however, are used for binding appropriately typed interface parameters when ABAP methods are called.

The additions s-val and d-val or val can be used to assign a start value to each variable. The values are specified as [ABAP values](javascript:call_link\('abenst_abap_representation.htm'\)). s-val only works for serialization, d-val only works for deserialization, and val works for serialization and deserialization.

Within a template, the statement [tt:assign](javascript:call_link\('abenst_tt_assign.htm'\)) can be used to assign a value to a variable. The variables area accessed using the attribute var of the various [ST statements](javascript:call_link\('abenst_statements.htm'\)).