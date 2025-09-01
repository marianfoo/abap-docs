  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [Changes in Release 6.20](javascript:call_link\('abennews-620.htm'\)) → 

Further Changes in Release 6.20

[1\. Parameter INITIAL SIZE for internal tables](#!ABAP_MODIFICATION_1@1@)
[
2\. Relevant language key in dictionary structures](#!ABAP_MODIFICATION_2@2@)
[
3\. New functions in the extended program check](#!ABAP_MODIFICATION_3@3@)
[
4\. Handling IMPORTING parameters with CREATE](#!ABAP_MODIFICATION_4@4@)
[
5\. Secondary language access for text elements](#!ABAP_MODIFICATION_5@5@)
[
6\. System field sy-toccu obsolete](#!ABAP_MODIFICATION_6@6@)
[
7\. Compatibility in structure typing](#!ABAP_MODIFICATION_7@7@)
[
8\. Lengths specified in the statement WRITE](#!ABAP_MODIFICATION_8@8@)
[
9\. XML serialization and XML deserialization](#!ABAP_MODIFICATION_9@9@)
[
10\. Static method call from XSLT](#!ABAP_MODIFICATION_10@10@)
[
11\. Addition USER-COMMAND after PARAMETERS ... AS LISTBOX](#!ABAP_MODIFICATION_11@11@)
[
12\. Wider frame on selection screens](#!ABAP_MODIFICATION_12@12@)

Modification 1

Parameter INITIAL SIZE for Internal Tables

An internal table created as a data type in ABAP Dictionary can be assigned an initial number of rows. This specification in the dictionary has the same effect as the [INITIAL SIZE](javascript:call_link\('abapdata_itab.htm'\)) addition in the ABAP source code. Therefore, all the information that describes a table, such as table category, key, row number, and type, are also available in the dictionary.

Modification 2

Relevant Language Key in Dictionary Structures

For error-free conversion of data that is swapped between [Unicode](javascript:call_link\('abenunicode_system_glosry.htm'\) "Glossary Entry") and non-Unicode systems, you can specify the structure components responsible for the relevant language key in ABAP Dictionary. If necessary, this information can be queried in the [remote function call](javascript:call_link\('abenrfc.htm'\)).

Modification 3

New Functions in the Extended Program Check

The following changes have been made to the extended program check:

-   Errors in included [type groups](javascript:call_link\('abaptype-pools.htm'\)) are no longer displayed.
    
-   An [INSERT itab](javascript:call_link\('abapinsert_itab.htm'\)) outside a loop causes a warning.
    
-   All characters in the ABAP source code, especially special characters that do not comply with the [naming conventions](javascript:call_link\('abentype_names.htm'\)), trigger a warning.
    
-   All [structure enhancements](javascript:call_link\('abenddic_structures_enh_cat.htm'\)) whose ABAP source code indicate potential runtime errors or changed program behavior trigger a warning.
    

Modification 4

Handling IMPORTING Parameters with CREATE

Formal parameters of methods that were passed to the method using IMPORTING and referenced there using [CREATE](javascript:call_link\('abapcreate_object.htm'\)) can no longer be overwritten. This check, which was previously not executed till runtime, is now caught by the syntax check.

Modification 5

Secondary Language Access for Text Elements

Secondary language access is now available for report titles, [list headers](javascript:call_link\('abenlist_header_glosry.htm'\) "Glossary Entry"), selection texts, text symbols, and texts specified dynamically of the form [ASSIGN ('TEXT-nnn') TO <fs>](javascript:call_link\('abapassign_mem_area_dynamic_dobj.htm'\)). If the text pool does not exist in the logon language, the system loads the text pool that matches the entry in the profile parameter zcsa/second\_language.
Until now, text elements that were not available in the text pool for the language lg remained unaltered by the statement [SET LANGUAGE lg](javascript:call_link\('abapset_language.htm'\)). In the context of this change, these texts are now reset to their initial value.

Modification 6

System Field sy-toccu Obsolete

In the statements READ TABLE, LOOP AT itab, and DESCRIBE TABLE, the system field sy-toccu is no longer filled.

Modification 7

Compatibility in Structure Typing

If structures are passed to formal parameters and function modules typed using STRUCTURE, or assigned to similarly typed field symbols, closing alignment gaps are now also respected by the type check.

Modification 8

Lengths Specified in the Statement WRITE

As of Release 6.20, the output length can be specified using the variants [WRITE AT (\*)](javascript:call_link\('abapwrite-.htm'\)) and [WRITE AT (\*\*)](javascript:call_link\('abapwrite-.htm'\)), as well as using numeric data objects.

Modification 9

XML Serialization and XML Deserialization

Objects and data references can now also be serialized and deserialized in [XML](javascript:call_link\('abenxml_glosry.htm'\) "Glossary Entry") serialization and XML deserialization.

1.  Objects are only serialized if the class implements the interface IF\_SERIALIZABLE\_OBJECT.
2.  Data references can only be serialized if the referenced type is not anonymous.
    

Modification 10

Static Method Call from XSLT

It is now also possible to call public [static methods](javascript:call_link\('abenstatic_method_glosry.htm'\) "Glossary Entry") from [XSLT programs](javascript:call_link\('abenxsl_transformation_1_glosry.htm'\) "Glossary Entry").

Modification 11

Addition USER-COMMAND after PARAMETERS ... AS LISTBOX

The addition USER-COMMAND can be specified for the statement [PARAMETERS](javascript:call_link\('abapparameters.htm'\)) together with the addition [AS LISTBOX](javascript:call_link\('abapparameters_screen.htm'\)).

Modification 12

Wider Frame on Selection Screens

The standard maximum width of a frame around a block created using [SELECTION-SCREEN](javascript:call_link\('abapselection-screen_block.htm'\)) is now 120 columns. It was previously 83 columns.