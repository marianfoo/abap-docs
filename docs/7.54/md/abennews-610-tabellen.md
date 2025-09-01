  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews.htm) →  [Changes in Releases 6.xx](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-6.htm) →  [Changes in Release 6.10](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-610.htm) → 

Internal Tables in Release 6.10

In Release 6.10, the following enhancements have been made to internal table functions:

[1\. Creating a table object](#!ABAP_MODIFICATION_1@1@)
[
2\. Checking the convertibility of key fields](#!ABAP_MODIFICATION_2@2@)
[
3\. Duplicate or overlapping key specifications](#!ABAP_MODIFICATION_3@3@)
[
4\. Support for accessing attributes](#!ABAP_MODIFICATION_4@4@)
[
5\. Table categories for text pools and IN conditions](#!ABAP_MODIFICATION_5@5@)
[
6\. Handling overflows in COLLECT and SUM](#!ABAP_MODIFICATION_6@6@)
[
7\. Additions ASSIGNING and REFERENCE INTO](#!ABAP_MODIFICATION_7@7@)
[
8\. Case in dynamic components](#!ABAP_MODIFICATION_8@8@)
[
9\. Combined key specifications with table\_line](#!ABAP_MODIFICATION_9@9@)
[
10\. Establishing the number of rows in an internal table](#!ABAP_MODIFICATION_10@10@)
[
11\. Optimization when accessing internal tables](#!ABAP_MODIFICATION_11@11@)
[
12\. Offset and length specifications for the table definition](#!ABAP_MODIFICATION_12@12@)

Modification 1

Creating a table object

Any table objects can be created at runtime by using the statement [CREATE DATA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data.htm). If the table type is known in full, this is respected by the syntax check.

Modification 2

Checking the convertibility of key fields

In the case of the statements [READ TABLE itab WITH KEY k1 = v1 .... kn = vn](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table.htm) and [DELETE TABLE itab WITH KEY = v1 .... kn = vn](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdelete_itab.htm), the system already checks whether the key values are convertible to the component type in the syntax check. This convertibility check is also effective for the newer variant READ ... WITH TABLE KEY .... Previously, the runtime error MOVE\_NOT\_SUPPORTED was triggered if the conversion was not possible.

Modification 3

Duplicate or overlapping key specifications

In the case of duplicate or overlapping key specifications, the statement [READ TABLE itab WITH KEY k1 = v1 .... kn = vn](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table.htm) now triggers a syntax error instead of a syntax warning. If specified dynamically, it was previously the case that the last key specification was used; now the runtime error DYN\_KEY\_DUPLICATE is triggered.

Modification 4

Support for Accessing Attributes

The addition ... COMPARING o->attr now makes it possible to access the attributes of objects that are components of internal tables, similar to when reading, changing, deleting, or sorting internal tables.

Modification 5

Table Categories for Text Pools and IN Conditions

Alongside [standard tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_table_glosry.htm "Glossary Entry"), the [tables categories](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes_tabkind.htm) HASHED and SORTED are supported for the statements [READ](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_textpool.htm), [DELETE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdelete_textpool.htm), and [INSERT TEXTPOOL ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_textpool.htm). The IN conditions for [SELECT ... WHERE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwhere.htm) and [LOOP ... WHERE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogexp_select_option.htm) are also no longer dependent on the table category.

Modification 6

Handling Overflows in COLLECT and SUM

Previously, fields of type f were only checked for possible overflows in the case of arithmetic additions. When using [COLLECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcollect.htm) and [SUM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsum.htm), the addition was terminated in accordance with IEEE standards and a runtime error was triggered as soon as the overflow limit (Infinity) was reached. Now this raises the exception CX\_SY\_ARITHMETIC\_OVERFLOW, which can be caught using [TRY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptry.htm).

Modification 7

Additions ASSIGNING and REFERENCE INTO

The additions [ASSIGNING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table_outdesc.htm) and [REFERENCE INTO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table_outdesc.htm) are now available for the statements [READ](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_table.htm), [LOOP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab.htm), [INSERT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab.htm), [APPEND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapappend.htm), [MODIFY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_itab.htm), and [COLLECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcollect.htm). Previously, only the addition ASSIGNING for the keywords LOOP and READ was available.

Modification 8

Uppercase and lowercase spelling in dynamic components

Previously, the field content of a dynamic component always had to written in capitals, for example [SORT ... BY ('COMP')](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsort_itab.htm). Now lowercase spelling is valid in specifications for all internal table commands.

Modification 9

Combined key specifications with table\_line

Now there are additional key specifications for the [pseudo component](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpseudo_component_glosry.htm "Glossary Entry") table\_line. Previously, it was not possible to have a key specified in the form READ ... WITH KEY table\_line->attr = ... table\_line = ... BINARY SEARCH, for example, where both the value of the attribute ATTR and the value of the reference itself were the key.

Modification 10

Establishing the number of rows in an internal table

The number of rows in an internal table can be determined using the function [LINES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcompute_arith.htm). For consistency, this function is intended to replace the statement [DESCRIBE TABLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdescribe_table.htm) in the long term, since not all ABAP types can be described using DESCRIBE.

Modification 11

Optimization when accessing internal tables

For Release 6.10, optimized access to tables of the types SORTED and HASHED has been introduced. For more details, see the section on [Optimized Key Operations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_perfo.htm).

In addition, in the case of assignments between internal tables of the same type, data is now only copied if changes were made to these tables. This [table sharing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_sharing_glosry.htm "Glossary Entry") has a positive effect on runtime and the memory required.
Until now, these optimizations had to be carried out explicitly using field symbols. Now it is possible to work normally with a work area, because no table is copied when reads are performed.

Modification 12

Offset and length declarations for the table definition

Previously, components of the table key could be specified with offset and length declarations, which resulted in undefined runtime behavior. This is no longer possible and a syntax error is triggered instead.