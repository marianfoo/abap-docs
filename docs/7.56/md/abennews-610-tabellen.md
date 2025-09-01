  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [News for Release 6.10](javascript:call_link\('abennews-610.htm'\)) → 

Internal Tables in Release 6.10

In Release 6.10, the following enhancements have been made to internal tables:

[1\. Creating a table object](#!ABAP_MODIFICATION_1@1@)
[2\. Checking the convertibility of key fields](#!ABAP_MODIFICATION_2@2@)
[3\. Duplicate or overlapping key specifications](#!ABAP_MODIFICATION_3@3@)
[4\. Support for Accessing Attributes](#!ABAP_MODIFICATION_4@4@)
[5\. Table Categories for Text Pools and IN Conditions](#!ABAP_MODIFICATION_5@5@)
[6\. Handling Overflows in COLLECT and SUM](#!ABAP_MODIFICATION_6@6@)
[7\. Additions ASSIGNING and REFERENCE INTO](#!ABAP_MODIFICATION_7@7@)
[8\. Uppercase and lowercase spelling in dynamic components](#!ABAP_MODIFICATION_8@8@)
[9\. Combined key specifications with table\_line](#!ABAP_MODIFICATION_9@9@)
[10\. Establishing the number of lines in an internal table](#!ABAP_MODIFICATION_10@10@)
[11\. Optimization when accessing internal tables](#!ABAP_MODIFICATION_11@11@)
[12\. Offset and length declarations for the table definition](#!ABAP_MODIFICATION_12@12@)

Modification 1   

Creating a table object

Any table objects can be created at runtime by using the statement [CREATE DATA](javascript:call_link\('abapcreate_data.htm'\)). If the table type is known in full, this is respected by the syntax check.

Modification 2   

Checking the convertibility of key fields

In the case of the statements [READ TABLE itab WITH KEY k1 = v1 .... kn = vn](javascript:call_link\('abapread_table.htm'\)) and [DELETE TABLE itab WITH KEY = v1 .... kn = vn](javascript:call_link\('abapdelete_itab.htm'\)), the system already checks whether the key values are convertible to the component type in the syntax check. This convertibility check is also effective for the newer variant READ ... WITH TABLE KEY .... Previously, the runtime error MOVE\_NOT\_SUPPORTED was raised if the conversion was not possible.

Modification 3   

Duplicate or overlapping key specifications

In the case of duplicate or overlapping key specifications, the statement [READ TABLE itab WITH KEY k1 = v1 .... kn = vn](javascript:call_link\('abapread_table.htm'\)) now raises a syntax error instead of a syntax warning. If specified dynamically, it was previously the case that the last key specification was used; now the runtime error DYN\_KEY\_DUPLICATE is raised.

Modification 4   

Support for Accessing Attributes

The addition ... COMPARING o->attr now makes it possible to access the attributes of objects that are components of internal tables, similar to when reading, changing, deleting, or sorting internal tables.

Modification 5   

Table Categories for Text Pools and IN Conditions

Alongside [standard tables](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry"), the [tables categories](javascript:call_link\('abaptypes_tabcat.htm'\)) HASHED and SORTED are supported for the statements [READ](javascript:call_link\('abapread_textpool.htm'\)), [DELETE](javascript:call_link\('abapdelete_textpool.htm'\)), and [INSERT TEXTPOOL ...](javascript:call_link\('abapinsert_textpool.htm'\)). The IN conditions for [SELECT ... WHERE](javascript:call_link\('abapwhere.htm'\)) and [LOOP ... WHERE](javascript:call_link\('abenlogexp_select_option.htm'\)) are also no longer dependent on the table category.

Modification 6   

Handling Overflows in COLLECT and SUM

Previously, fields of type f were only checked for possible overflows in the case of arithmetic additions. When using [COLLECT](javascript:call_link\('abapcollect.htm'\)) and [SUM](javascript:call_link\('abapsum.htm'\)), the addition was terminated in accordance with IEEE standards and a runtime error was raised as soon as the overflow limit (Infinity) was reached. Now this raises the exception CX\_SY\_ARITHMETIC\_OVERFLOW, which can be caught using [TRY](javascript:call_link\('abaptry.htm'\)).

Modification 7   

Additions ASSIGNING and REFERENCE INTO

The additions [ASSIGNING](javascript:call_link\('abapread_table_outdesc.htm'\)) and [REFERENCE INTO](javascript:call_link\('abapread_table_outdesc.htm'\)) are now available for the statements [READ](javascript:call_link\('abapread_table.htm'\)), [LOOP](javascript:call_link\('abaploop_at_itab.htm'\)), [INSERT](javascript:call_link\('abapinsert_itab.htm'\)), [APPEND](javascript:call_link\('abapappend.htm'\)), [MODIFY](javascript:call_link\('abapmodify_itab.htm'\)), and [COLLECT](javascript:call_link\('abapcollect.htm'\)). Previously, only the addition ASSIGNING for the keywords LOOP and READ was available.

Modification 8   

Uppercase and lowercase spelling in dynamic components

Previously, the field content of a dynamic component always had to written in capitals, for example [SORT ... BY ('COMP')](javascript:call_link\('abapsort_itab.htm'\)). Now lowercase spelling is valid in specifications for all internal table statements.

Modification 9   

Combined key specifications with table\_line

Now there are additional key specifications for the [pseudo component](javascript:call_link\('abenpseudo_component_glosry.htm'\) "Glossary Entry") table\_line. Previously, it was not possible to have a key specified in the form READ ... WITH KEY table\_line->attr = ... table\_line = ... BINARY SEARCH, for example, where both the value of the attribute attr and the value of the reference itself were the key.

Modification 10   

Establishing the number of lines in an internal table

The number of lines in an internal table can be determined using the function [LINES](javascript:call_link\('abapcompute_arith.htm'\)). For consistency, this function is intended to replace the statement [DESCRIBE TABLE](javascript:call_link\('abapdescribe_table.htm'\)) in the long term, since not all ABAP types can be described using DESCRIBE.

Modification 11   

Optimization when accessing internal tables

For Release 6.10, optimized access to tables of the types SORTED and HASHED has been introduced. For more details, see the section on [Optimized Key Operations](javascript:call_link\('abenitab_perfo.htm'\)).

In addition, in the case of assignments between internal tables of the same type, data is now only copied if changes were made to these tables. This [table sharing](javascript:call_link\('abentable_sharing_glosry.htm'\) "Glossary Entry") has a positive effect on runtime and the memory required.
Until now, these optimizations had to be carried out explicitly using field symbols. Now it is possible to work normally with a work area, because no table is copied when reads are performed.

Modification 12   

Offset and length declarations for the table definition

Previously, components of the table key could be specified with offset and length declarations, which resulted in undefined runtime behavior. This is no longer possible and a syntax error is raised instead.