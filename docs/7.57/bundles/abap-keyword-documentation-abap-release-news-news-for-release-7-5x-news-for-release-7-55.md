# ABAP - Keyword Documentation / ABAP - Release News / News for Release 7.5x / News for Release 7.55

Included pages: 13


### abennews-755.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: News for Release 7.55, ABENNEWS-755, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASug
gestion for improvement:)

News for Release 7.55

The kernel release for Release 7.55 is 7.81.

-   [ABAP Dictionary in Release 7.55](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-755-ddic.htm)
-   [ABAP CDS in Release 7.55](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-755-abap_cds.htm)
-   [ABAP Sessions in Release 7.55](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-755-abap_sessions.htm)
-   [Data Types in Release 7.55](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-755-types.htm)
-   [Expressions and Functions in Release 7.55](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-755-expressions.htm)
-   [String Processing in Release 7.55](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-755-strings.htm)
-   [ABAP SQL in Release 7.55](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-755-abap_sql.htm)
-   [ABAP CDS Access Control in Release 7.55](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-755-cds_access_control.htm)
-   [Exception Handling in Release 7.55](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-755-exceptions.htm)
-   [ABAP RESTful Application Programming Model in Release 7.55](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-755-restful.htm)

Continue
[ABAP Dictionary in Release 7.55](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-755-ddic.htm)
[ABAP CDS in Release 7.55](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-755-abap_cds.htm)
[ABAP Sessions in Release 7.55](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-755-abap_sessions.htm)
[Data Types in Release 7.55](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-755-types.htm)
[Expressions and Functions in Release 7.55](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-755-expressions.htm)
[String Processing in Release 7.55](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-755-strings.htm)
[ABAP SQL in Release 7.55](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-755-abap_sql.htm)
[ABAP CDS Access Control in Release 7.55](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-755-cds_access_control.htm)
[Exception Handling in Release 7.55](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-755-exceptions.htm)
[ABAP RESTful Application Programming Model in Release 7.55](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-755-restful.htm)


### abennews-755-ddic.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.55](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-755.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Dictionary in Release 7.55, ABENNEWS-755-DDIC, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

ABAP Dictionary in Release 7.55

[1\. Internal Handling of the Name Table](#!ABAP_MODIFICATION_1@1@)
[2\. Load Unit](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Internal Handling of the Name Table

The internal handling of the [name table (nametab)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenname_table_glosry.htm "Glossary Entry") that stores the runtime objects of data types in the ABAP Dictionary has changed.

This has the following consequences:

-   The internal ABAP statement [EXPORT NAMETAB](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_nametab.htm) cannot be used any more and leads to a runtime error.
-   The internal ABAP statement [IMPORT NAMETAB](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapimport_nametab.htm) is still partly supported for reasons of downward compatibility. Any access to entries for [DDIC table types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_table_type_glosry.htm "Glossary Entry") leads to a runtime error. Any other access leads to errors from [ATC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenatc_glosry.htm "Glossary Entry").
-   The former native database table DDNTF for separate nametab field descriptions is not supported any more and will be deleted.

Modification 2   

Load Unit

In ABAP Dictionary, a new technical setting for database tables is available: the [load unit](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_load_unit.htm). It specifies how the data of the table is loaded into the main memory of the SAP HANA database. It can be used to reduce the memory consumption in the HANA database server.


### abennews-755-abap_cds.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.55](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-755.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS in Release 7.55, ABENNEWS-755-ABAP_CDS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion for improvement:)

ABAP CDS in Release 7.55

[1\. Defining Associations in CDS Projection Views](#!ABAP_MODIFICATION_1@1@)
[2\. CDS View Entities](#!ABAP_MODIFICATION_2@2@)
[3\. CDS View Entity Extensions](#!ABAP_MODIFICATION_3@3@)
[4\. New Session Variables for User Time Zone and User Date](#!ABAP_MODIFICATION_4@4@)
[5\. New String Function for Regular Expressions](#!ABAP_MODIFICATION_5@5@)

Modification 1   

Defining Associations in CDS Projection Views

It is now possible to define new associations to external data sources in [CDS projection views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_as_projection.htm).

Modification 2   

CDS View Entities

A new kind of CDS view is available: the [CDS view entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_views.htm). CDS view entities represent an improved version of [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_views.htm) (DEFINE VIEW). They serve the same purpose and have the same structure as CDS DDIC-based views (obsolete), but offer many advantages. CDS view entities are planned to replace CDS DDIC-based views (obsolete) in the future. A CDS view entity is defined with the statement DEFINE VIEW ENTITY.

Modification 3   

CDS View Entity Extensions

The new statement [EXTEND VIEW ENTITY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_extend_view_entity.htm) of the DDL of ABAP CDS makes it possible to add new view fields to existing CDS views entities and CDS projection views by using CDS view entity extensions.

Modification 4   

New Session Variables for User Time Zone and User Date

Two new [session variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_session_variable_v1.htm) are available for [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_view_glosry.htm "Glossary Entry") in ABAP CDS:

-   [$session.user\_timezone](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_session_variable_v1.htm), which returns the time zone defined in the user master record for the local user time.
-   [$session.user\_date](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_session_variable_v1.htm), which returns the local date of a user.

Modification 5   

New String Function for Regular Expressions

ABAP CDS now supports the new string function [REPLACE\_REGEXPR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm) that allows regular expressions to be replaced.


### abennews-755-abap_sessions.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.55](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-755.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Sessions in Release 7.55, ABENNEWS-755-ABAP_SESSIONS, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP Sessions in Release 7.55

Modification

Number of ABAP Sessions

The default value of profile parameter rdisp/max\_alt\_modes, that determines the possible number of [ABAP sessions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_session_glosry.htm "Glossary Entry") per [user session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuser_session_glosry.htm "Glossary Entry"), was enhanced from 6 to 16 and is now the same as the maximum number of ABAP sessions per user session.


### abennews-755-types.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.55](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-755.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Data Types in Release 7.55, ABENNEWS-755-TYPES, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion for improvement:)

Data Types in Release 7.55

Modification

Indicator Structures

The new addition [INDICATORS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_indicators.htm) of the statement [TYPES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes.htm) defines an [indicator structure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenindicator_structure_glosry.htm "Glossary Entry") as a [substructure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensubstructure_glosry.htm "Glossary Entry") of a given [structured type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstructured_type_glosry.htm "Glossary Entry"). An indicator structure can be used as a [ABAP SQL indicator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_indicator_glosry.htm "Glossary Entry") in ABAP SQL read and write statements.


### abennews-755-expressions.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.55](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-755.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Expressions and Functions in Release 7.55, ABENNEWS-755-EXPRESSIONS, 757%0D%0A%0D%0AE
rror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Expressions and Functions in Release 7.55

Modification

Calculation Assignments in Constructor Operator REDUCE

In the assignments behind the addition NEXT of the constructor operator [REDUCE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_reduce.htm) the [calculation assignment operators](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencalc_assignment_op_glosry.htm "Glossary Entry") +=, +=, \*=, /= or &&=, can be used now and the respective rules apply.


### abennews-755-strings.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.55](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-755.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: String Processing in Release 7.55, ABENNEWS-755-STRINGS, 757%0D%0A%0D%0AError:%0D%0A%
0D%0A%0D%0A%0D%0ASuggestion for improvement:)

String Processing in Release 7.55

[1\. Support of Perl Compatible Regular Expressions](#!ABAP_MODIFICATION_1@1@)
[2\. Verbatim Replacements](#!ABAP_MODIFICATION_2@2@)
[3\. New Catchable Exception CX\_SY\_STRING\_SIZE\_TOO\_LARGE](#!ABAP_MODIFICATION_3@3@)
[4\. Exception CX\_SY\_STRING\_SIZE\_TOO\_LARGE in Transformations](#!ABAP_MODIFICATION_4@4@)
[5\. Formatting Option CURRENCY for Decimal Floating Point Numbers](#!ABAP_MODIFICATION_5@5@)

Modification 1   

Support of Perl Compatible Regular Expressions

Besides the existing support of [POSIX regular expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenposix_regex_glosry.htm "Glossary Entry"), ABAP supports now also [PCRE regular expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpcre_regex_glosry.htm "Glossary Entry") that are processed by the [PCRE2 Library](https://www.pcre.org/) implemented in the [ABAP Kernel](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenkernel_glosry.htm "Glossary Entry"). PCRE regular expressions can be used in the same way as POSIX regular expressions. The distinction is made:

-   By the new addition [PCRE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_pattern.htm) that can be used instead of [REGEX](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind_pattern.htm) in the statements [FIND](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind.htm) and [REPLACE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace.htm).
-   By the new argument [pcre](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_functions_regex.htm) that can be used instead of [regex](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_functions_regex.htm) in built-in functions.
-   By new (factory) methods of the [system classes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregex_system_classes.htm) CL\_ABAP\_REGEX and CL\_ABAP\_MATCHER.

PCRE regular expressions are more powerful and have better performance than POSIX regular expressions. For more information, see [Regular Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenregular_expressions.htm).

Modification 2   

Verbatim Replacements

The new addition [VERBATIM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace_options.htm) of the [REPLACE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace.htm) statement causes all characters of the replacement string to be taken literally. With that addition, special characters for regular expression replacement patterns have no special meaning.

Modification 3   

New Catchable Exception CX\_SY\_STRING\_SIZE\_TOO\_LARGE

Modification 4   

Exception CX\_SY\_STRING\_SIZE\_TOO\_LARGE in Transformations

The exception that occurs when an operation with a [string](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_glosry.htm "Glossary Entry") exceeds its [maximum size](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmemory_consumption_2.htm) is now connected to the exception class CX\_SY\_STRING\_SIZE\_TOO\_LARGE and can be handled. Previously, it always resulted in runtime error STRING\_SIZE\_TOO\_LARGE.

This exception can also be handled for the statement [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transformation.htm) if some conditions are met.

Modification 5   

Formatting Option CURRENCY for Decimal Floating Point Numbers

The

-   addition [CURRENCY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwrite_to_options.htm) of the [WRITE TO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwrite_to.htm) and [WRITE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwrite-.htm) statements
-   formatting option [CURRENCY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcompute_string_format_options.htm) in [string templates](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_templates.htm)

can now also be applied to [decimal floating point numbers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendecfloat_glosry.htm "Glossary Entry").


### abennews-755-abap_sql.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.55](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-755.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP SQL in Release 7.55, ABENNEWS-755-ABAP_SQL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion for improvement:)

ABAP SQL in Release 7.55

[1\. New Aggregate Function ALLOW\_PRECISION\_LOSS](#!ABAP_MODIFICATION_1@1@)
[2\. Optional Window Frame Specification within a Window Function](#!ABAP_MODIFICATION_2@2@)
[3\. New Window Functions FIRST\_VALUE and LAST\_VALUE](#!ABAP_MODIFICATION_3@3@)
[4\. New Date/Time Conversion Functions](#!ABAP_MODIFICATION_4@4@)
[5\. New Time Stamp Functions](#!ABAP_MODIFICATION_5@5@)
[6\. New Date Functions](#!ABAP_MODIFICATION_6@6@)
[7\. New Additions After the ORDER BY Clause](#!ABAP_MODIFICATION_7@7@)
[8\. New Aggregate Functions](#!ABAP_MODIFICATION_8@8@)
[9\. New Geometry Conversion Function as\_geo\_json](#!ABAP_MODIFICATION_9@9@)
[10\. SQL Conditions Revised](#!ABAP_MODIFICATION_10@10@)
[11\. New Window Function NTILE](#!ABAP_MODIFICATION_11@11@)
[12\. SELECT, INTO target Modification](#!ABAP_MODIFICATION_12@12@)
[13\. New Type Conversion Function to\_blob](#!ABAP_MODIFICATION_13@13@)
[14\. New Type Conversion Function to\_clob](#!ABAP_MODIFICATION_14@14@)
[15\. New Currency Conversion Function currency conversion](#!ABAP_MODIFICATION_15@15@)
[16\. Streaming and Locators Can Now Be Used on SQL Expressions](#!ABAP_MODIFICATION_16@16@)
[17\. Further Data Types Allowed in Elementary SQL Expressions](#!ABAP_MODIFICATION_17@17@)
[18\. Hierarchy Load Options](#!ABAP_MODIFICATION_18@18@)
[19\. Typed Literals](#!ABAP_MODIFICATION_19@19@)
[20\. New String Functions](#!ABAP_MODIFICATION_20@20@)
[21\. Addition to the UPDATE FROM Clause](#!ABAP_MODIFICATION_21@21@)
[22\. Strict Mode of the Syntax Check](#!ABAP_MODIFICATION_22@22@)
[23\. Change Regarding the CONNECTION Addition](#!ABAP_MODIFICATION_23@23@)

Modification 1   

New Aggregate Function ALLOW\_PRECISION\_LOSS

ABAP SQL now supports the following new [aggregate function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenaggregate_function_glosry.htm "Glossary Entry") in combination with the [aggregate expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenaggregate_expression_glosry.htm "Glossary Entry") [SUM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_agg_func.htm):

-   [ALLOW\_PRECISION\_LOSS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_allow_precision_loss.htm)

Modification 2   

Optional Window Frame Specification within a Window Function

The optional [window frame specification](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_over.htm) defines a subset of rows within a window, called frame. Frames are determined with respect to the current row, which enables the frame to move within a window.

Modification 3   

New Window Functions FIRST\_VALUE and LAST\_VALUE

ABAP SQL now supports the following new [window functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwindow_function_glosry.htm "Glossary Entry") in [window expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwindow_expression_glosry.htm "Glossary Entry"):

-   [FIRST\_VALUE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_win_func.htm) and [LAST\_VALUE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_win_func.htm).

Modification 4   

New Date/Time Conversion Functions

ABAP SQL now supports the following new [date/time conversion functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_time_conversions.htm):

-   [TSTMPL\_TO\_UTCL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_time_conversions.htm) and [TSTMPL\_FROM\_UTCL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_time_conversions.htm)
-   [DATS\_TO\_DATN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_time_conversions.htm) and [DATS\_FROM\_DATN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_time_conversions.htm)
-   [TIMS\_TO\_TIMN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_time_conversions.htm) and [TIMS\_FROM\_TIMN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_time_conversions.htm)

Modification 5   

New Time Stamp Functions

ABAP SQL now supports the following new [time stamp functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_timestamp_func.htm):

-   [UTCL\_CURRENT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_timestamp_func.htm), [UTCL\_ADD\_SECONDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_timestamp_func.htm), and [UTCL\_SECONDS\_BETWEEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_timestamp_func.htm).

Modification 6   

New Date Functions

ABAP SQL now supports the following new [date functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_func.htm):

-   [DATN\_DAYS\_BETWEEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_func.htm), [DATN\_ADD\_DAYS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_func.htm), and [DATN\_ADD\_MONTHS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_func.htm).

Modification 7   

New Additions After the ORDER BY Clause

ABAP SQL now supports the following additions after the [ORDER BY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaporderby_clause.htm) clause:

-   [NULLS FIRST](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaporderby_clause.htm) and [NULLS LAST](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaporderby_clause.htm).

Modification 8   

New Aggregate Functions

ABAP SQL now supports the following new [aggregate functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_agg_func.htm):

-   MEDIAN, STDDEV, VAR, CORR, and CORR\_SPEARMAN.

Modification 9   

New Geometry Conversion Function as\_geo\_json

ABAP SQL now supports the following new [geometry conversion function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_geo_conv_func.htm):

-   [as\_geo\_json](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_geo_conv_func.htm)

Modification 10   

SQL Conditions Revised

-   The operator [IN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_logexp_list_in.htm) can now be used with a [subquery that returns value tuples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_logexp_list_in.htm).
-   [SQL functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_builtin_functions.htm) and [cast expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_cast.htm) can now be used as operands on the right side of [comparison operators](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_logexp_compare.htm).

Modification 11   

New Window Function NTILE

ABAP SQL now supports the following new [window function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwindow_function_glosry.htm "Glossary Entry") in [window expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwindow_expression_glosry.htm "Glossary Entry"):

-   [NTILE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_win_func.htm)

Modification 12   

SELECT, INTO target Modification

When using SELECT, INTO target, host variables can now be declared inline even when the FROM\-clause is dynamic, as long as all fields of the SELECT list are known statically. Previously, the structure of the result set, including SELECT list, FROM clause, and any indicators needed to be static.

Modification 13   

New Type Conversion Function to\_blob

Modification 14   

New Type Conversion Function to\_clob

ABAP SQL now supports the new [type conversion functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_type_conv_func.htm) [to\_clob](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_type_conv_func.htm) and [to\_blob](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_type_conv_func.htm).

Modification 15   

New Currency Conversion Function currency conversion

ABAP SQL now supports the new currency conversion function [currency\_conversion](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_curr_unit_conv_func.htm).

Modification 16   

Streaming and Locators Can Now Be Used on SQL Expressions

Streaming and locators can now be used in combination with SQL expressions such as [TO\_CLOB](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_type_conv_func.htm), [TO\_BLOB](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_type_conv_func.htm), and [AS\_GEO\_JSON](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_geo_conv_func.htm).

Modification 17   

Further Data Types Allowed in Elementary SQL Expressions

[Elementary SQL expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_elem.htm) can now also have the dictionary data types STRING and RAWSTRING.

Modification 18   

Hierarchy Load Options

The [hierarchy generator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry") [HIERARCHY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_hierarchy_generator.htm) can now use the new addition LOAD BULK*|*INCREMENTAL*|*load\_option to specify the load policy for a generated hierarchy.

Modification 19   

Typed Literals

[Typed literals](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_typed_literals.htm) for many ABAP Dictionary types are now available in ABAP SQL.

Modification 20   

New String Functions

ABAP SQL now supports the new string functions [REPLACE\_REGEXPR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm), [LIKE\_REGEXPR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm), and [OCCURRENCES\_REGEXPR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm) that support regular expressions.

Modification 21   

Addition to the UPDATE FROM Clause

[Set indicators](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapupdate_set_indicator.htm) can now be used as addition after the [UPDATE FROM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapupdate_source.htm)\-clause to indicate columns for update.

Modification 22   

Strict Mode of the Syntax Check

If one the new features listed above is used in an ABAP SQL statement, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_strictmode_755.htm), which handles the statement more strictly than the regular syntax check.

Modification 23   

Change Regarding the CONNECTION Addition

The addition CONNECTION only bypasses [table buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffering_glosry.htm "Glossary Entry") in case of real remote connections that are available in table DBCON.


### abennews-755-cds_access_control.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.55](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-755.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS Access Control in Release 7.55, ABENNEWS-755-CDS_ACCESS_CONTROL, 757%0D%0A%0
D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP CDS Access Control in Release 7.55

[1\. Check with element IS *\[*NOT*\]* INITIAL in a Literal Condition](#!ABAP_MODIFICATION_1@1@)
[2\. Addition bypass when](#!ABAP_MODIFICATION_2@2@)
[3\. Check on the User Name in User Conditions](#!ABAP_MODIFICATION_3@3@)
[4\. Data Types](#!ABAP_MODIFICATION_4@4@)
[5\. Aspect Bypass Conditions](#!ABAP_MODIFICATION_5@5@)

Modification 1   

Check with element IS *\[*NOT*\]* INITIAL in a Literal Condition

In a literal condition, IS *\[*NOT*\]* INITIAL can now be used to check whether the value of the left side matches (does not match) the initial value of the ABAP data type that matches the element.

Modification 2   

Addition bypass when

The addition [BYPASS WHEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_cond_pfcg.htm) can now be used to specify a bypass condition for an element. If the condition is met, the element in question is not used for authorization filtering.

Modification 3   

Check on the User Name in User Conditions

When the user name is checked in [user conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_cond_user.htm), the following can now be checked instead of the user name:

-   The value of the alias.
-   The number of the business partner assigned to the user.

Modification 4   

Data Types

The operand that can be specified on the left side of a condition of an access rule of a CDS role can now have the built-in ABAP Dictionary [data type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_dcl_cond_data_types.htm) RAW.

Modification 5   

Aspect Bypass Conditions

IS *\[*NOT*\]* INITIAL and IS INITIAL OR NULL are now possible as [aspect bypass conditions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_generic_aspect.htm).


### abennews-755-exceptions.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.55](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-755.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Exception Handling in Release 7.55, ABENNEWS-755-EXCEPTIONS, 757%0D%0A%0D%0AError:%0D
%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Exception Handling in Release 7.55

Modification

Declaration of CX\_NO\_CHECK Exceptions

Exceptions of category CX\_NO\_CHECK are always declared implicitly in interfaces of procedures and can always be propagated.

Now it is also possible to declare exceptions of category CX\_NO\_CHECK with RAISING in procedure interfaces, for example for [methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_general.htm). This allows it to document the possible occurrence of such exceptions and to change the category of existing exceptions into CX\_NO\_CHECK without leading to syntax errors in procedure interfaces.


### abennews-755-restful.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.55](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-755.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP RESTful Application Programming Model in Release 7.55, ABENNEWS-755-RESTFUL, 757
%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP RESTful Application Programming Model in Release 7.55

In release 7.55, the [ABAP RESTful Application Programming Model (RAP)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarap_glosry.htm "Glossary Entry") was enhanced as follows:

-   [CDS BDL in Release 7.55](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-755-cds_bdl.htm)

Continue
[CDS BDL in Release 7.55](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-755-cds_bdl.htm)


### abennews-755-cds_bdl.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.55](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-755.htm) →  [ABAP RESTful Application Programming Model in Release 7.55](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-755-restful.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL in Release 7.55, ABENNEWS-755-CDS_BDL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0
A%0D%0ASuggestion for improvement:)

CDS BDL in Release 7.55

[1\. Type Mapping](#!ABAP_MODIFICATION_1@1@)
[2\. Additional Save in Managed BOs](#!ABAP_MODIFICATION_2@2@)
[3\. Unmanaged Save in Managed BOs](#!ABAP_MODIFICATION_3@3@)
[4\. Implementation Grouping](#!ABAP_MODIFICATION_4@4@)
[5\. Managed Internal Numbering for Managed RAP BOs](#!ABAP_MODIFICATION_5@5@)
[6\. New Options for Output Parameters](#!ABAP_MODIFICATION_6@6@)
[7\. Unmanaged Lock in Managed RAP BOs](#!ABAP_MODIFICATION_7@7@)
[8\. Draft Support for RAP BOs](#!ABAP_MODIFICATION_8@8@)
[9\. Determine Actions](#!ABAP_MODIFICATION_9@9@)
[10\. Precheck for Modify Operations](#!ABAP_MODIFICATION_10@10@)
[11\. New Field Characteristics](#!ABAP_MODIFICATION_11@11@)

Modification 1   

Type Mapping

The new statement [mapping for](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_type_mapping.htm) can be used to map field names from legacy code to field names from the current data model. Available for unmanaged and managed business objects.

Modification 2   

Additional Save in Managed BOs

The new statement [with additional save](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_saving.htm) can be used to enhance the default save sequence in a managed implementation scenario.

Modification 3   

Unmanaged Save in Managed BOs

The new statement [with unmanaged save](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_saving.htm) can be used to implement an own saving strategy in a managed implementation scenario.

Modification 4   

Implementation Grouping

The new statement [group](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_grouping.htm) can be used to divide the implementation-relevant parts of a BO's business logic into several groups for behavior implementation.

Modification 5   

Managed Internal Numbering for Managed RAP BOs

The new statement [numbering:managed](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_field_numbering.htm) can be used to automatically generate values for primary key fields with a UUID. Available for managed implementation scenarios.

Modification 6   

New Options for Output Parameters

For actions and functions, the [output parameter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action_output_para.htm) can now be an entity or a structure.

The addition [selective](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action_output_para.htm) can be used for an output parameter to return only parts of the result structure.

Modification 7   

Unmanaged Lock in Managed RAP BOs

The new statement [lock master unmanaged](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_locking.htm) can be used if the application developer wants to implement an own locking mechanism in a managed implementation scenario. An own locking mechanism can be used instead of the RAP locking mechanism provided by the RAP framework.

Modification 8   

Draft Support for RAP BOs

The new statement [with draft](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_with_draft.htm) can be used to enable the draft concept for a RAP BO.

Modification 9   

Determine Actions

Determine actions are a new type of action defined using [determine action](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_determine_action.htm). With a determine action, determinations and validations can be executed on request.

Modification 10   

Precheck for Modify Operations

The new RAP BO operation addition [precheck](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_precheck.htm) can be used to prevent illegal changes from reaching the application buffer by prechecking modify operations.

Modification 11   

New Field Characteristics

CDS BDL now supports the following new [field characteristics](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_field_char.htm):

-   [mandatory:create](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_field_char.htm)
-   [readonly:update](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_field_char.htm)


### abennews-755-restful.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.55](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-755.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP RESTful Application Programming Model in Release 7.55, ABENNEWS-755-RESTFUL, 757
%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP RESTful Application Programming Model in Release 7.55

In release 7.55, the [ABAP RESTful Application Programming Model (RAP)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarap_glosry.htm "Glossary Entry") was enhanced as follows:

-   [CDS BDL in Release 7.55](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-755-cds_bdl.htm)

Continue
[CDS BDL in Release 7.55](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-755-cds_bdl.htm)
