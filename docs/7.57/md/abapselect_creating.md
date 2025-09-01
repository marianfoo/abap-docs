  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [SELECT, clauses](javascript:call_link\('abenselect_clauses.htm'\)) →  [SELECT, INTO, APPENDING](javascript:call_link\('abapinto_clause.htm'\)) →  [SELECT, LOB Handles](javascript:call_link\('abenselect_into_lob_handles.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SELECT, CREATING, ABAPSELECT_CREATING, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0AS
uggestion for improvement:)

SELECT, CREATING

[Short Reference](javascript:call_link\('abapselect_shortref.htm'\))

Syntax

... CREATING *{*  READER*|*LOCATOR FOR *{* COLUMNS blob1 blob2 ... clob1 clob2 ... *}*
                                 *|* *{* ALL *\[*OTHER*\]* *\[*BLOB*|*CLOB*\]* COLUMNS *}*
               *\[*READER*|*LOCATOR FOR ...*\]* *}*
           *|* *{*  (crea\_syntax) *}*  ...

Additions:

[1\. ... READER*|*LOCATOR](#!ABAP_ADDITION_1@1@)
[2\. ... *\[*ALL *\[*OTHER*\]* *\[*BLOB*|*CLOB*\]**\]* COLUMNS *\[*blob1 blob2 ... clob1 clob2 ...*\]*](#!ABAP_ADDITION_2@2@)
[3\. ... (crea\_syntax)](#!ABAP_ADDITION_3@3@)

Effect

The addition CREATING must be specified after [INTO](javascript:call_link\('abapinto_clause.htm'\)) or [APPENDING](javascript:call_link\('abapinto_clause.htm'\)) when a reference variable for a [LOB handle](javascript:call_link\('abenlob_handle_glosry.htm'\) "Glossary Entry") is assigned to a [LOB](javascript:call_link\('abenlob_glosry.htm'\) "Glossary Entry") of the result set as a target field and the [static type](javascript:call_link\('abenstatic_type_glosry.htm'\) "Glossary Entry") of this reference variable is one of the following three [LOB interfaces](javascript:call_link\('abenlob_interfaces.htm'\)):

-   IF\_ABAP\_DB\_LOB\_HANDLE
-   IF\_ABAP\_DB\_CLOB\_HANDLE
-   IF\_ABAP\_DB\_BLOB\_HANDLE

The specifications after CREATING determine the class from which the associated LOB handles are created. For all other possible static types, the class can be determined from the static type and the LOB type. CREATING cannot be specified in this case.

The CREATING addition can be specified either statically or dynamically. In the static variant, the class and columns are determined using additions. In the dynamic variant, the syntax of the static variants is specified in crea\_syntax.

The syntax and the rules for the additions after CREATING correspond to the type and columns specified for the derivation of LOB handle structures with [TYPES](javascript:call_link\('abaptypes_lob_handle.htm'\)). Unlike the statement [TYPES](javascript:call_link\('abaptypes_lob_handle.htm'\)), the [type specified](javascript:call_link\('abaptypes_lob_handle_type.htm'\)) is limited here to READER and LOCATOR, and only components that are typed with a LOB interface are respected. The types specified for the first two specifications after CREATING must be different.

Hint

The addition CREATING cannot be used in combination with SQL expressions that return [LOBs](javascript:call_link\('abenlob_glosry.htm'\) "Glossary Entry"). It can only be used with LOB fields directly.

Addition 1   

... READER*|*LOCATOR

Effect

These additions determine the LOB handle class for each of the columns specified after it.

-   READER creates [reader streams](javascript:call_link\('abenreader_stream_glosry.htm'\) "Glossary Entry") for all of the columns specified.
-   LOCATOR creates [locators](javascript:call_link\('abenlocator_glosry.htm'\) "Glossary Entry") for all of the columns specified after it.

The assignment to the classes is the same as the [type specified](javascript:call_link\('abaptypes_lob_handle_type.htm'\)) in the derivation of a LOB handle structure using [TYPES](javascript:call_link\('abaptypes_lob_handle.htm'\)), except that here it is the [dynamic type](javascript:call_link\('abendynamic_type_glosry.htm'\) "Glossary Entry") that is determined and not the static type.

Example

After a row is read, the dynamic type of reader is CL\_ABAP\_DB\_X\_READER.

DATA reader TYPE REF TO if\_abap\_db\_lob\_handle.
SELECT SINGLE picture
       FROM demo\_blob\_table
       WHERE name = '...'
       INTO @reader CREATING READER FOR COLUMNS picture.

Addition 2   

... *\[*ALL *\[*OTHER*\]* *\[*BLOB*|*CLOB*\]**\]* COLUMNS *\[*blob1 blob2 ... clob1 clob2 ...*\]*

Effect

These additions assign the previous type specifications to the columns of the result set. The meaning of the additions is the same as the [columns specified](javascript:call_link\('abaptypes_lob_handle_columns.htm'\)) in the derivation of an LOB handle structure using [TYPES](javascript:call_link\('abaptypes_lob_handle.htm'\)). The difference is that the set of columns used consists exactly of those columns from the result set that were assigned to a reference variable whose static type is an [LOB interface](javascript:call_link\('abenlob_interfaces.htm'\)):

-   Individual columns for which this is not the case must not be specified.
-   The specification of ALL ... COLUMNS only respects such columns.

The combination options for columns specified with one another and with types specified are the same as for [TYPES](javascript:call_link\('abaptypes_lob_handle.htm'\)). Specifically, the column specified as ALL OTHER ... must be the last column specified.

Hints

-   The specification of ALL ... COLUMNS also respects columns which are added by later enhancements to the data sources.
-   The actual names must be used for the columns specified as blob1, blob2, clob1, clob2, .... The alias names defined using [AS](javascript:call_link\('abapselect_list.htm'\)) are ignored.
-   The columns cannot be specified using [path expressions](javascript:call_link\('abenabap_sql_path.htm'\)).
-   Columns of the type [GEOM\_EWKB](javascript:call_link\('abenddic_builtin_types.htm'\)) are not supported as [BLOBs](javascript:call_link\('abenblob_glosry.htm'\) "Glossary Entry").

Example

Like the previous example, but the column PICTURE is selected automatically here.

DATA reader TYPE REF TO if\_abap\_db\_blob\_handle.
SELECT SINGLE picture
       FROM demo\_blob\_table
       WHERE name = '...'
       INTO @reader CREATING READER FOR ALL BLOB COLUMNS.

Addition 3   

... (crea\_syntax)

Effect

As an alternative to static variants, a data object crea\_syntax can be specified in parentheses which contains the syntax of the static additions or is initial when executing the statement. The same applies to crea\_syntax as to column\_syntax when specifying columns dynamically in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)). If the content of crea\_syntax is initial, the addition CREATING is ignored.

Example

Like the previous example, but the items after CREATING are specified dynamically here.

DATA reader TYPE REF TO if\_abap\_db\_blob\_handle.
FINAL(crea\_syntax) = \`READER FOR ALL BLOB COLUMNS\`.
SELECT SINGLE picture
       FROM demo\_blob\_table
       WHERE name = '...'
       INTO @reader CREATING (crea\_syntax).