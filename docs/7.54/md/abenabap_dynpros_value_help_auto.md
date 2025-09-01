  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpros.htm) →  [Field Help, Input Help, and Dropdown List Boxes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpros_help.htm) →  [Input Help](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpros_value_help.htm) → 

Input Helps from ABAP Dictionary

The primary input helps used in ABAP Dictionary are [search helps](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensearch_help_glosry.htm "Glossary Entry"). A search help is a standalone [repository object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrepository_object_glosry.htm "Glossary Entry") used specifically to provide input helps on screen fields. Search helps can be associated with table fields and data elements. The content of [check tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencheck_table_glosry.htm "Glossary Entry"), [fixed values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfixed_value_glosry.htm "Glossary Entry"), or calendar helps and clock helps can be used instead of search helps.

-   [Overview of ABAP Dictionary Input Helps](#@@ITOC@@ABENABAP_DYNPROS_VALUE_HELP_AUTO_1)

-   [Hierarchy of the Input Helps](#@@ITOC@@ABENABAP_DYNPROS_VALUE_HELP_AUTO_2)

-   [Data Transport of Search Helps](#@@ITOC@@ABENABAP_DYNPROS_VALUE_HELP_AUTO_3)

-   [Search Help Exits](#@@ITOC@@ABENABAP_DYNPROS_VALUE_HELP_AUTO_4)

Overview of ABAP Dictionary Input Helps

-   Search helps

There are two kinds of search helps: elementary and collective. An elementary search help represents a search path and defines the source of the data in the proposal list, how data is transported between the screen and the infrastructure, and how the input help dialog is designed. A collective search help comprises multiple elementary search helps. A collective search help combines all the search paths that are meaningful for a field.

-   Check tables

In the case of [foreign key relationships](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenforeign_key_dependency_glosry.htm "Glossary Entry") defined in ABAP Dictionary, the key fields of the check table can be used as an input help for a [foreign key field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenforeign_key_field_glosry.htm "Glossary Entry") used as a dynpro field.

-   Fixed values

The [fixed values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfixed_value_glosry.htm "Glossary Entry") of a domain can be used as an input help for dynpro fields that reference the domain in question. The [value table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_table_glosry.htm "Glossary Entry") of a domain, on the other hand, cannot be used for input helps.

-   Calendar helps and clock helps

Predefined calendar helps and clock helps are available for use as input helps for fields of the type DATS and TIMS.

Hierarchy of the Input Helps

Search helps can be bound in various ways to fields of database tables or components of ABAP Dictionary structures. The input help available to a user depends on the way a search help is bound. The following list shows, in ascending order of priority, the input help used:

-   Calendar helps and clock helps

If no other input helps are defined for fields of the type DATS or TIMS, the calendar help or clock help is used.

-   Fixed values

If no check table or search help is defined for a field, any fixed values of the domain are used for the input help.

-   Search help of the data element

If no check table or search help is defined for a field, the search help associated with the data element of the field is used.

-   Check table

If the check table of a field does not have a [text table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_table_glosry.htm "Glossary Entry") and does not have its own search help, and no dedicated search help is specified for a field, the content of the key fields of the check table are used as an input help.

-   Check table with text table

If the [foreign key table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenforeign_key_table_glosry.htm "Glossary Entry") of the check table of the fields is a [text table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_table_glosry.htm "Glossary Entry"), the associated text from the text table is displayed in the input help in the logon language of the user.

-   Check table with search help

If a search help is bound to the check table of a field, the search help is used with the values from the check table, but also enables a data transport of multiple parameters.

-   Search help of the field

If the dynpro field is defined with reference to a field of a structure or a database table and a search help is associated with this field directly, this binding has the highest priority and is always used as an input help. To avoid errors in the [automatic input check](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpros_checks_auto.htm), the bound search help should only propose values that also exist in a check table.

If necessary, the input help is modified using methods of [flagging obsolete data in check tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_deprecation.htm).

Data Transport of Search Helps

Search helps have an interface (a search help parameter) that defines which input is respected by the screen and which screen fields can be filled with data from the row chosen in the proposal list. Parameters of a search help can be defined as import and export parameters. A parameter can be both an input and an export parameter at the same time.

When the input help is called, data is transported between the dynpro fields and the import parameters of the search help. If a search help is bound to a data element or directly to a screen of the dynpro, only a single search help parameter is associated with the field. In this case, data is transported only between the field and this parameter. If the search help is bound to the table field or structure field or to the check table of the field, it may be necessary to fill multiple search help parameters. When the input help is called, an attempt is made to find an identically named field for each import parameter of the search help that is associated with a table field or structure field. If an appropriate field is found, its content is passed to the search help parameter.

When a row in the proposal list of the search help is selected, data is transported between the export parameters of the search help and the associated dynpro fields. The values of the proposal list are passed only to input-enabled fields and to fields that are associated with only a single export parameter of the search help.

Search Help Exits

A search help exit can be used to modify the standard way an input help for a field works. A search help exit is a function module with a predefined interface and can be called at defined points within the input help process. A search help exit can be programmed to modify the program flow of the search help or replace certain steps.

The function module can modify data such as the properties of the search helps, the selection options that apply when selecting from the proposal list, the proposal list itself, or the next step in the program flow.

Each search help exit must have the same interface as the function module F4IF\_SHLP\_EXIT\_EXAMPLE, which is used as a pattern for any new search exits. Further optional parameters can also be defined, such as any number of export parameters. For more information, see the documentation for this function module.

If a search help exit is associated with a search help, it is called by the help processor at the following events. These events are points where user actions are permitted and it makes sense for the user to respond:

-   Before the dialog box with a search path selection is displayed.

SELONE event (only in collective search helps). The search help exit can be used here, for example, to restrict which search helps are available. This is the only event in which the search help exit is called for collective search helps. All other events call the search help exit for the selected elementary search help.

-   After an elementary search help is selected.

PRESEL1 event. This is when the binding of the search help to the dynpro can be modified, for example by associating search help parameters with dynpro fields.

-   Before the dialog box for entering conditions is displayed.

PRESEL event. This is when the default content of the dialog box can be modified (or the dialog box hidden).

-   Before the data selection.

SELECT time. The selection of values can be passed from the search help exit, in part or in full.

-   Before displaying the proposal list.

DISP event. This is when the proposal list display can be modified by the search help exit. This makes it possible, for example, to hide certain entries or fields of a table from the user depending on the user’s authorizations.

-   Before the values chosen by the user are passed to the screen.

RETURN event. It may be useful to modify the further program flow here in response to which value is chosen.

Some requirements made on search helps occur repeatedly. One example is the option of specifying a search help dynamically at POH time. Cases like this are covered by default function modules that are used either directly as search help exits or that can be called in search help exits. These function modules are prefixed with F4UT\_.

Executable Example

[Input Helps from ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_f4_help_dic_abexa.htm)