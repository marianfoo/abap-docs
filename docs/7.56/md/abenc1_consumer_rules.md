  

* * *

AS ABAP Release 756, ©Copyright 2022 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for Strict ABAP](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Working with released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [Compatibility Rules for the C1 Contract](javascript:call_link\('abenc1_compatibility_rules.htm'\)) → 

C1 Contract Rules for API Consumers

The [provider rules](javascript:call_link\('abenc1_provider_rules.htm'\)) for objects with C1 contract ensure that released objects are changed only in a very restricted way and help to avoid errors and interruptions after an SAP upgrade. Nevertheless, the rules do not prescribe full downward compatibility and leave some room for necessary enhancements to released APIs. Therefore, users of released APIs still have to consider the allowed compatible changes and access the APIs in such a way that the following errors and interruptions are avoided:

-   Problems during the upgrade.
-   Syntax errors after the upgrade.
-   Runtime errors after an upgrade.
-   Wrong behavior after an upgrade.

The following sections list allowed changes to released APIs that must be considered when accessing them.

-   [Changes to Elementary Data Types](#abenc1-consumer-rules-1-----------operations-with-elementary-data-objects---@ITOC@@ABENC1_CONSUMER_RULES_2)
    -   [Operations with Structures](#abenc1-consumer-rules-3-------adding-or-changing-non-key-elements-of-structures---@ITOC@@ABENC1_CONSUMER_RULES_4)
    -   [Includes](#abenc1-consumer-rules-5-----------assignments-and-comparisons---@ITOC@@ABENC1_CONSUMER_RULES_6)
    -   [Unstructured Access](#abenc1-consumer-rules-7-----------field-symbols---@ITOC@@ABENC1_CONSUMER_RULES_8)
    -   [RFC](#abenc1-consumer-rules-9-------example---@ITOC@@ABENC1_CONSUMER_RULES_10)

Changes to Elementary Data Types

The data type of

-   DDIC domains or DDIC data elements
-   components of DDIC structures and DDIC database tables or elements of CDS entities
-   public types of global ABAP classes or interfaces

can be changed as follows:

-   Integer types INT1, INT2, INT4 or b, s, i can be replaced by integer types of a larger value range.
-   The length of data types CHAR, SSTRING, DEC, CURR, QUAN, DF16\_DEC, DF34\_DEC or c, p can be increased.
-   The number of decimal places of data types DEC, CURR, QUAN, DF16\_DEC, DF34\_DEC or p can be increased.

All these changes result in an enhanced value range compared to the original data type. A consumer must be able to handle larger values. This impacts all operations with elementary data objects that are typed with such a type as well as operations with structured data that contain components of such a type.

Operations with Elementary Data Objects

When working with elementary data objects of one of the above types the behavior after an allowed type change depends on the type, the operand position and the content.

Possible Problems

Examples for possible problems are:

-   In assignments of data objects that have a changed type to data objects whose type is not changed, content can be cut off or overflow exceptions may occur.
-   In statements that require compatible data types, syntax errors can occur. Examples are:
    -   Assignments between [data reference variables](javascript:call_link\('abendata_reference_variable_glosry.htm'\) "Glossary Entry").
    -   Access to internal tables with an elementary line type using a table key.
    -   Importing data from data clusters with [IMPORT](javascript:call_link\('abapimport_data_cluster.htm'\)).
-   In statements that require lossless assignments, exceptions can occur. Examples are:
    -   [Lossless Operator EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\))
    -   [Host variables](javascript:call_link\('abenabap_sql_host_variables.htm'\)) in read positions of ABAP SQL.

Mitigation

When declaring data objects always refer to the released data types itself. Do not refer to self defined types. Use data objects referring to released types only at operand positions, where changing the type cannot produce an error.

Operations with Structures

Changing the data type of a component of a structure changes the [technical type](javascript:call_link\('abentechnical_type_attr_glosry.htm'\) "Glossary Entry") of the complete structure. This has a large impact since there are many operand positions, where compatibility is required for structures and generally, the same errors can occur that result from changing the elements of structures described below and the same mitigations apply.

Adding or Changing Non-key Elements of Structures

Non-key elements can be added to global types as structured DDIC types or CDS entities. Those types can be released APIs themselves or can be used for typing attributes or method parameters of releases classes or interfaces. Also the position of non-key Elements can be changed. This impacts all operations with APIs that rely on a certain number of components of a structure and on their position. Main examples are:

Includes

Including a released structure into another structure.

Possible Problems

Error, when a component is added that already exists.

Mitigation

Include a released structure only by renaming its components with [suffixes](javascript:call_link\('abenddic_include_structure.htm'\)).

Assignments and Comparisons

Assignments and comparisons between data objects that are typed with the released structured type and data objects that are typed otherwise can occur for:

-   [Logical Expressions](javascript:call_link\('abenlogexp.htm'\))
-   [Assignments](javascript:call_link\('abenvalue_assignments.htm'\))
-   [Working with internal tables](javascript:call_link\('abenitab.htm'\))
-   [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\))
-   [Working with data clusters](javascript:call_link\('abendata_cluster.htm'\))

Possible Problems

Depending on the change all kinds of errors might occur. Especially, the following allowed changes can affect the rules for processing structures fundamentally:

-   Adding numerical components to a formerly character-like structure.
-   Adding [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") components to a formerly [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") structure.
-   Shifting the positions of numerical or deep components to formerly character-like sections.

Mitigation

No assignments or comparisons between released structures and data objects that are typed otherwise. No usage of otherwise defined structures in ABAP SQL. The various CORRESPONDING mechanisms can be used to mitigate the problem, but they are not failsafe in all situations.

Unstructured Access

Processing the content of a released structure without addressing single components as for example:

-   [Offset/Length Specifications](javascript:call_link\('abenoffset_length.htm'\))
-   [String processing](javascript:call_link\('abenabap_data_string.htm'\)) (on complete structure)

Possible Problems

Depending on the change (see above) all kinds of errors might occur.

Mitigation

No processing of released structures without accessing single components.

Field Symbols

Addressing released structures with [field symbols](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry") by using:

-   [ASSIGN](javascript:call_link\('abapassign.htm'\))
-   ASSIGNING addition when [working with internal tables](javascript:call_link\('abenitab.htm'\))

Possible Problems

When the addition [CASTING](abapassign_casting.htm#!ABAP_ALTERNATIVE_2@2@) is used, deep components must appear with exactly the same type and position in the assigned structure.

Mitigation

No casting assignment of released structures to field symbols.

RFC

Passing released structures to remote [RFMs](javascript:call_link\('abenrfm_glosry.htm'\) "Glossary Entry").

Possible Problems

Deep components are not supported in RFC.

Mitigation

No passing of released structures to remote RFMs.

Example

The first part of the example simulates data types from the ABAP Dictionary by data types defined in the program. The second part represents consumer code working with these data types in an unfavorable way by mixing them with locally defined types. If changes allowed by C1 contract are applied to the pseudo external types, syntax errors and exceptions occur.

\*Pseudo DDIC types
TYPES:
  ddic\_de\_i TYPE i,
  ddic\_de\_c TYPE c LENGTH 3,
  BEGIN OF ddic\_struc,
    text TYPE ddic\_de\_c,
    int  TYPE ddic\_de\_i,
  END OF ddic\_struc.
DATA ddic\_dbtab TYPE HASHED TABLE OF ddic\_struc WITH UNIQUE key text.
\*Consumer Code
DATA int TYPE ddic\_de\_i.
"Exception when DDIC\_DE\_I is changed to int8
"and int exceeds value range of i
DO int TIMES.
  ...
ENDDO.
"Syntax error when DDDIC\_DE\_I is changed to int8
DATA dref TYPE REF TO i.
dref = REF #( int ).
"Syntax error when DDIC\_DE\_I is changed to int8
DATA itab TYPE SORTED TABLE OF i WITH NON-UNIQUE KEY table\_line.
INSERT int INTO TABLE itab.
DATA char TYPE ddic\_de\_c.
"Exception when length of DDIC\_DE\_C is increased
"and char contains more than three relevant characters
SELECT carrname
       FROM scarr
       WHERE carrid = @char
       INTO TABLE @DATA(result).
DATA:
  struc1 TYPE ddic\_struc,
  BEGIN OF struc2,
    text TYPE c LENGTH 3,
    int  TYPE i,
  END OF struc2.
"Syntax errors when DDIC\_DE\_I is changed to int8
"or when the length of DDIC\_DE\_C is increased
"or when a component is added to DDIC\_STRUC
struc1 = struc2.
IF struc1 = struc2.
  ...
ENDIF.
"Syntax error when DDIC\_DE\_I is changed to int8
"or when the length of DDIC\_DE\_C is increased
"or when a component is added to DDIC\_STRUC
FIELD-SYMBOLS <fs> TYPE ddic\_struc.
ASSIGN struc2 TO <fs> CASTING.
"Syntax error when DDIC\_DE\_I is changed to int8
"or when the length of DDIC\_DE\_C is increased
"or when a component is added to DDIC\_STRUC
SELECT single \*
       from @ddic\_dbtab as dbtab
       into @struc2.