  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Attributes of Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendescribe_field.htm) →  [DESCRIBE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdescribe.htm) →  [DESCRIBE, Internal Variant](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendescribe_internal.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DESCRIBE%20FIELD%20INTO%2C%20ABAPDESCRIBE_FIELD_INTO%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DESCRIBE FIELD INTO

This statement is for internal use only.
It must not be used in application programs.

Syntax

DESCRIBE FIELD dobj INTO td.

Effect

All properties of the field f, its components, subcomponents, and so on, are in the output of the field td (type description). td must have the type sydes\_desc, which is defined in the [type pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentype_pool_glosry.htm "Glossary Entry") SYDES.

The structure sydes\_desc has two table-like components types and names:

-   The tree structure of the type belonging to f is mapped in types. The components of a node are stored closely in the table types. The beginning and end of the line area that represents the components are stored in types-from and types-tp. The reference to the superior node can be found in types-back. If no superior or subordinate node exists, then this is marked by the value 0 (for the relevance of further components, see the following sections).
-   The names of components, types, and so on. are not stored directly in types. Instead, the components types-idx\_... hold an index in the name table names. The value 0 indicates that there is no reference to the name table.
    
    names contains the names in the component names-name, possibly split into multiple parts. If a name continues in the following line, this is indicated by an asterisk ('\*') in the component names-continue.
    

The type description table (types) not only stores information about the tree structure but also further information about the type of f or its components. In particular, this includes all information that can be determined using the usual additions of DESCRIBE FIELD. In detail, types contains the following columns:

idx\_name

Component name

idx\_user\_type

Name of a user-defined type, that is, a type defined by a [TYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes.htm) statement. Derived types (... TYPE a-b) and structures from the ABAP Dictionary are not considered to be user-defined types.

context

For user-defined types only: The context in which the type is defined. Possible values are defined in the constant sydes\_context of the type pool SYDES. These constants should only be used to carry out a comparison. The following type contexts are distinguished:
sydes\_context-progran: Program-global type
sydes\_context-form: form\-local type
sydes\_context-function: function\-local type
sydes\_context-method: method\-local type

idx\_context\_name

For user-defined types only:
In a local context: The name of the FORM or FUNCTION in which the type was defined. The name of the associated program is then the first entry in the name table.
In a global context: The name of the program in which the type was defined.

idx\_edit\_mask

[Conversion exit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_exit_glosry.htm "Glossary Entry"), like the addition EDIT MASK in a simple DESCRIBE.

idx\_help\_id

Help ID in references to fields from the ABAP Dictionary

length

Internal length, like the addition LENGTH in a simple DESCRIBE

output\_length

Output length, like the addition OUTPUT-LENGTH in a simple DESCRIBE

decimals

Number of [decimal digits](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfract_digit_glosry.htm "Glossary Entry"), like the addition DECIMALS in a simple DESCRIBE

type

ABAP type, like the addition TYPE in a simple DESCRIBE. If DESCRIBE INTO is applied to a nested structure that contains a [boxed component](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenboxed_component_glosry.htm "Glossary Entry"), the type is returned with the internal ID j ([static box](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstatic_box_glosry.htm "Glossary Entry")).

table\_kind

The [table category](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptypes_tabcat.htm) is stored here for the components that represent an internal table. The same values are returned as for the variant [DESCRIBE TABLE itab KIND k](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdescribe_table.htm). For components that do not represent a table, the return value is set to sydes\_kind-undefined (see type pool SYDES).

Example

The following definition of the complex data type employee\_struc is to be assumed

TYPES:
  BEGIN OF name\_struc,
    first TYPE c LENGTH 20,
    last  TYPE c LENGTH 20,
  END OF name\_struc,
  BEGIN OF absence\_time\_struc,
    day  TYPE d,
    from TYPE t,
    to   TYPE t,
  END OF absence\_time\_struc,
  phone\_number TYPE n LENGTH 20,
  BEGIN OF employee\_struc,
    id               LIKE sbook-customid,
    name             TYPE name\_struc,
    BEGIN OF address,
      street  TYPE c LENGTH 30,
      zipcode TYPE n LENGTH 4,
      place   TYPE c LENGTH 30,
    END OF address,
    salary\_per\_month TYPE p LENGTH 10 DECIMALS 3,
    absent           TYPE STANDARD TABLE OF absence\_time\_struc
                        WITH NON-UNIQUE DEFAULT KEY,
    phone            TYPE STANDARD TABLE OF phone\_number
                        WITH NON-UNIQUE DEFAULT KEY,
  END OF employee\_struc.

The structure of the type can be determined by collecting the type pool SYDES as follows:

DATA: employee TYPE employee\_struc,
      td       TYPE sydes\_desc.
DESCRIBE FIELD employee INTO td.

The following table shows some selected columns of the type description table td-types. For a better overview, the names of the columns idx\_name, idx\_user\_type, and idx\_edit\_mask have been abbreviated:

   |FROM| TO |BACK|NAME|UTYP|EMSK|TYPE
\---|----|----|----|----|----|----|----
01 |  2 |  7 |  0 |  0 |  2 |  0 |  v
02 |  0 |  0 |  1 |  6 |  0 |  4 |  N
03 |  8 |  9 |  1 |  7 |  5 |  0 |  u
04 | 10 | 12 |  1 |  8 |  0 |  0 |  u
05 |  0 |  0 |  1 |  9 |  0 |  0 |  P
06 | 13 | 13 |  1 | 11 |  0 |  0 |  h
07 | 17 | 17 |  1 | 12 |  0 |  0 |  h
08 |  0 |  0 |  3 | 13 |  0 |  0 |  C
09 |  0 |  0 |  3 | 14 |  0 |  0 |  C
10 |  0 |  0 |  4 | 15 |  0 |  0 |  C
11 |  0 |  0 |  4 | 16 |  0 |  0 |  N
12 |  0 |  0 |  4 | 17 |  0 |  0 |  C
13 | 14 | 16 |  6 |  0 | 18 |  0 |  u
14 |  0 |  0 | 13 | 20 |  0 |  0 |  D
15 |  0 |  0 | 13 | 21 |  0 |  0 |  T
16 |  0 |  0 | 13 | 22 |  0 |  0 |  T
17 |  0 |  0 |  7 |  0 |  0 |  0 |  N

It should be noted that the entries in lines 6 and 7 represent internal tables (ABAP type h). An internal table always has an entry for the associated line type (lines 13 and 17).
The indexes in the lines 5 to 7 refer to entries in the name table td-names. Taking, for example, line 3, the associated component name in td-names is found from line 7 (name) onward and the associated user type from line 5 (name\_struc) onward.
The name table td-names contains the following entries. It should be noted that the names SALARY\_PER\_MONTH and ABSENCE\_TIME\_STRUC are stored in two parts:

   |CONTINUE|NAME                   |CONTINUE|NAME
\---|--------|--------------     ----|--------|--------------
01 |        |DESCTEST            12 |        |PHONE
02 |        |EMPLOYEE\_STRUC      13 |        |FIRST
03 |        |SBOOK-CUSTOMID      14 |        |LAST
04 |        |==ALPHA             15 |        |STREET
05 |        |NAME\_STRUC          16 |        |ZIPCODE
06 |        |ID                  17 |        |PLACE
07 |        |NAME                18 |   \*    |ABSENCE\_TIME\_ST
08 |        |ADDRESS             19 |        |RUC
09 |   \*    |SALARY\_PER\_MONT     20 |        |DAY
10 |        |H                   21 |        |FROM
11 |        |ABSENT              22 |        |TO