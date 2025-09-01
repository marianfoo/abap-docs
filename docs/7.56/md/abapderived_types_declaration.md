  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [Other RAP-Supporting ABAP Language Elements](javascript:call_link\('abenabap_rap_other.htm'\)) →  [ABAP for RAP, BDEF Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)) → 

Declaration of Variables with BDEF Derived Types

For modularization purposes, [BDEF derived types](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") can be used outside of the reserved handler methods by declaring variables, for example, in ABAP programs. The statements TYPES, DATA and CREATE DATA are supported. For example, an internal table can be declared with the type [TYPE TABLE FOR](javascript:call_link\('abaptype_table_for.htm'\)):

DATA itab TYPE TABLE FOR CREATE entity\_name.

entity\_name must be the full name of the entity, not the alias defined in the [BDEF](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") since there is no clear reference to a specific BDEF outside of handler methods in [behavior pools](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry"). The following type declarations are supported in the context of BDEF derived types:

-   [TYPE TABLE FOR](javascript:call_link\('abaptype_table_for.htm'\))
-   [TYPE STRUCTURE FOR](javascript:call_link\('abaptype_structure_for.htm'\))
-   [TYPE REQUEST FOR](javascript:call_link\('abaptype_request_for.htm'\))
-   [TYPE RESPONSE FOR](javascript:call_link\('abaptype_response_for.htm'\))

Creation of Data Objects

Data objects with BDEF derived types can be created dynamically. It can be done, most conveniently, using the method create\_data of class CL\_ABAP\_BEHVDESCR:

cl\_abap\_behvdescr=>create\_data( ).

The following parameters can be used for the method:

Parameter

Details

p\_name

Name of the entity

p\_root

Name of the root

p\_op

Operation,
for example, if\_abap\_behv=>op-m-create or the predefined constant (e. g. just 'C' for create).

p\_sub\_name

Association or action name

p\_kind

Type category

p\_structure

'X'
For the creation of a row type (and not a table type)

The data object creation is based on [absolute types](javascript:call_link\('abenabsolute_typename_glosry.htm'\) "Glossary Entry"). These types can be constructed manually and instantiated using the following syntax.

CREATE DATA dref TYPE (der\_type).

The variable der\_type represents a string that follows a certain pattern that looks, for example, as follows. Note that the entries for the placeholders must be capitalized and that the string requires additional parts depending on the context, for example, when referring to associations or in case of actions.

\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=operation

The name of the behavior definition (bdef\_name) comes in first position, followed by the entity name (entity\_name; it cannot be the alias) and the specification for the type (operation). The following table provides an overview on strings that can be used for der\_type in the respective contexts:

Context

String for der\_type

Standard operations

\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=CREATE
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=UPDATE
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=DELETE
For create-by-association operations: \\BDEF=bdef\_name\\ENTITY=entity\_name\\ASSOC=assoc\_name\\TYPE=CREATE

Read operations

For READ IMPORT:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=READ\_I
For READ RESULT:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=READ\_R
For read-by-association operations:
IMPORT:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\ASSOC=assoc\_name\\TYPE=READ\_I
RESULT:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\ASSOC=assoc\_name\\TYPE=READ\_R
LINK:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\ASSOC=assoc\_name\\TYPE=LINK

Responses

TYPE TABLE FOR .../TYPE STRUCTURE FOR ... (the variants without \_LATE refer to those types with the addition EARLY):
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=FAILED
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=FAILED\_LATE
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=MAPPED
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=MAPPED\_LATE
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=REPORTED \\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=REPORTED\_LATE
TYPE RESPONSE FOR ...
\\BDEF=bdef\_name\\TYPE=FAILED
\\BDEF=bdef\_name\\TYPE=FAILED\_LATE
\\BDEF=bdef\_name\\TYPE=MAPPED
\\BDEF=bdef\_name\\TYPE=MAPPED\_LATE
\\BDEF=bdef\_name\\TYPE=REPORTED
\\BDEF=bdef\_name\\TYPE=REPORTED\_LATE

Actions and functions

For ACTION IMPORT/FUNCTION IMPORT:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\ACTION=action\_or\_function\_name\\TYPE=IMPORTING
For ACTION RESULT/FUNCTION RESULT:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\ACTION=action\_or\_function\_name\\TYPE=RETURNING
For ACTION REQUEST/FUNCTION REQUEST:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\ACTION=action\_or\_function\_name\\TYPE=REQUEST

Locks

\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=KEY
Note: ...\\TYPE=LOCK is obsolete.

Permissions

For INSTANCE FEATURES KEY:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=I\_CONTROL\_K
For INSTANCE FEATURES REQUEST:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=I\_CONTROL\_F (optionally with \\GROUP)
For INSTANCE FEATURES RESULT:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=I\_CONTROL\_R (optionally with \\GROUP)
For FEATURES REQUEST:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=G\_CONTROL\_F (optionally with \\GROUP)
For FEATURES RESULT:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=G\_CONTROL\_R (optionally with \\GROUP)
For INSTANCE AUTHORIZATION KEY:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=I\_AUTH\_K
For INSTANCE AUTHORIZATION REQUEST:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=I\_AUTH\_Q (optionally with \\GROUP)
For INSTANCE AUTHORIZATION RESULT:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=I\_AUTH\_R (optionally with \\GROUP)
For GLOBAL AUTHORIZATION REQUEST:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=G\_AUTH\_Q (optionally with \\GROUP)
For GLOBAL AUTHORIZATION RESULT:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=G\_AUTH\_R (optionally with \\GROUP)
For PERMISSIONS REQUEST:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=PERM\_Q
For PERMISSIONS KEY:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=PERM\_K
For PERMISSIONS RESULT:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=PERM\_R

... FOR CHANGE.../
... FOR DELETE...

For TYPE TABLE FOR CHANGE/TYPE STRUCTURE FOR CHANGE:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=CHANGE
For TYPE RESPONSE FOR CHANGE:
\\BDEF=bdef\_name\\TYPE=CHANGE
For TYPE TABLE FOR DELETE/TYPE STRUCTURE FOR DELETE:
\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=DELETE
For TYPE RESPONSE FOR DELETE:
\\BDEF=bdef\_name\\TYPE=DELETE

TYPE TABLE FOR HIERARCHY/
TYPE STRUCTURE FOR HIERARCHY

\\BDEF=bdef\_name\\ENTITY=entity\_name\\TYPE=HIERARCHY

Example

Declaration of variables:

    TYPES: create\_type TYPE TABLE FOR CREATE demo\_managed\_root,
           cba\_type    TYPE TABLE FOR CREATE demo\_managed\_root\\\_child,
           update\_type TYPE TABLE FOR UPDATE demo\_managed\_root,
           delete\_type TYPE TABLE FOR DELETE demo\_managed\_root.
    DATA: create\_data TYPE TABLE FOR CREATE demo\_managed\_root,
          cba\_data    TYPE TABLE FOR CREATE demo\_managed\_root\\\_child,
          update\_data TYPE TABLE FOR UPDATE demo\_managed\_root,
          delete\_data TYPE TABLE FOR DELETE demo\_managed\_root.

Creation of data objects:

CONSTANTS entity\_name TYPE abp\_entity\_name VALUE 'DEMO\_MANAGED\_ROOT'.
DATA(ref) = cl\_abap\_behvdescr=>create\_data(
                p\_name = entity\_name
                p\_op   = if\_abap\_behv=>op-m-create "or: p\_op = 'C'
              ).
...
DATA ref2 TYPE REF TO data.
CREATE DATA ref2 TYPE
  ('\\BDEF=demo\_MANAGED\_ROOT\\ENTITY=DEMO\_MANAGED\_CHILD\\TYPE=FAILED').

Executable Example

The program DEMO\_RAP\_EML\_EXPLICIT\_DECL demonstrates the explicit declaration of variables with BDEF derived types with a simple EML READ statement.