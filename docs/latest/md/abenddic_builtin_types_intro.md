  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Built-In%20Data%20Types%2C%20ABENDDIC_BUILTIN_TYPES_INTRO%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Built-In Data Types

The built-in data types in ABAP Dictionary are used as follows:

-   To construct user-defined DDIC data types (DDIC data elements, DDIC structures, including DDIC database tables and DDIC views, and DDIC table types) in the ABAP Dictionary. They can also be used in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") in [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry"). They cannot be addressed directly in ABAP programs, with the exception of some type specifications in ABAP SQL. Built-in dictionary data types can only be addressed in ABAP programs by using dictionary objects or CDS objects and this is why they are also called external data types.
-   They have special technical and semantic properties and can be used to model semantic models.
-   They represent an interface between the built-in ABAP types and all possible vendor-specific data types of the supported databases. A mapping takes place in both directions.

The following sections describe the properties of the built-in data types in ABAP Dictionary:

-   [Overview of All Built-In Dictionary Types](javascript:call_link\('abenddic_builtin_types.htm'\))
-   [Properties of the Built-In Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\))
-   [Use of the Built-In Dictionary Types](javascript:call_link\('abenddic_builtin_type_usage.htm'\))

Example

The DDIC database table DEMO\_DDIC\_TYPES has columns with many different built-in ABAP Dictionary data types. The executable example [Built-In Dictionary Types](javascript:call_link\('abenddic_types_abexa.htm'\)) shows how to fill each of these columns with literal values.

Continue
[DDIC - Overview of All Built-In Dictionary Types](javascript:call_link\('abenddic_builtin_types.htm'\))
[DDIC - Properties of the Built-In Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\))
[DDIC - Use of the Built-In Dictionary Types](javascript:call_link\('abenddic_builtin_type_usage.htm'\))
![Example](exa.gif "Example") [DDIC - Built-In Dictionary Types](javascript:call_link\('abenddic_types_abexa.htm'\))