---
title: "CORRESPONDING, Basic Form"
description: |
  Syntax ...  CORRESPONDING dtype#( DEEP BASE ( base ) structitab  duplicates(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencorresponding_constr_dupl.htm) )    CORRESPONDING dtype#( BASE ( base ) structitab  dupli
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencorresponding_constr_arg_type.htm"
abapFile: "abencorresponding_constr_arg_type.htm"
keywords: ["select", "do", "if", "case", "try", "data", "types", "internal-table", "abencorresponding", "constr", "arg", "type"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvalue_assignments.htm) →  [Assigning Structure Components](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencorresponding.htm) →  [CORRESPONDING, Component Operator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expr_corresponding.htm) → 

CORRESPONDING, Basic Form

Syntax

... *{* CORRESPONDING dtype*|*#( *\[*DEEP*\]*
                             *\[*BASE ( base )*\]*
                             struct*|**{*itab *\[* [duplicates](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencorresponding_constr_dupl.htm)*\]**}* ) *}*
  *|* *{* CORRESPONDING dtype*|*#( *\[*BASE ( base )*\]*
                             struct*|**{*itab *\[* [duplicates](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencorresponding_constr_dupl.htm)*\]**}*
                             [mapping](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencorresponding_constr_mapping.htm) ) *}* ...

Addition:

[... BASE ( base ) ...](#!ABAP_ONE_ADD@1@)

Effect

This variant of the component operator [CORRESPONDING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expr_corresponding.htm) constructs a result with the target type specified using dtype or# from the components of a parameter struct or itab. struct and itab are [general expression positions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry").

-   If the target type is a structured type, a structure struct must be used as a parameter. The expression creates a structure of the target type. The target structure is either initial or is assigned the value of base after the optional addition BASE as a start value. The target structure is then by default assigned the identically named components of struct in accordance with the rules of [MOVE-CORRESPONDING for structures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmove-corresponding_structure.htm).
-   If the target type is a table type, an internal table itab must be used as a parameter. The expression creates an internal table of the target type. The target table is either initial or is assigned the value of base after the optional addition BASE as a start value. The target table is then by default assigned the identically named columns of itab in accordance with the rules of [MOVE-CORRESPONDING for internal tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmove-corresponding_itab.htm) using the addition KEEPING TARGET LINES. Here, the addition [duplicates](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencorresponding_constr_dupl.htm) can be used to control the behavior with respect to duplicate lines occurring in a target table with unique table keys.

If the addition DEEP is specified, the assignment is made as with the addition [EXPANDING NESTED TABLES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmove-corresponding.htm) of the statement MOVE-CORRESPONDING. A mapping rule [mapping](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencorresponding_constr_mapping.htm) can be used to override the matching name assignment rule of MOVE-CORRESPONDING. If a mapping rule is specified, the addition DEEP is set implicitly and cannot be specified explicitly.

Hints

-   An assignment of structures
    
    struct2 = CORRESPONDING #( struct1 ).
    
    without the addition BASE is not the same as an assignment
    
    MOVE-CORRESPONDING struct1 TO struct2.
    
    In MOVE-CORRESPONDING, all not identically named components in struct2 keep their value. When the result of the constructor expression is assigned, however, they are assigned the value from there, which is initial for ignored components. This behavior can be overridden using the addition BASE.
    
-   In the case of an assignment of a parameter to the target type and its assignment to a data object
    
    dobj = CORRESPONDING type( ... ).
    
    the target object is used directly for optimization reasons and then assigned. A temporary version of the expression is not created. This is not possible when the target object and parameter are identical, and a mapping rule is used, which enables, for example, the swapping of the content of two components. In cases like this, a temporary copy of the target object must be created, which is then used and a corresponding syntax warning is produced. This warning can be hidden using a pragma. If this is not detected until runtime, the information needed to create the necessary temporary copy of the target object is missing and the runtime error CORRESPONDING\_SELF occurs. See the executable example [Reflexive Component Assignments](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenreflexive_corresponding_abexa.htm).
    

Example

Assignment of four identically named components of standard table spfli\_tab to a temporarily sorted table of type flights in an operand position.

TYPES:
  BEGIN OF flight,
    carrid   TYPE spfli-carrid,
    connid   TYPE spfli-connid,
    cityfrom TYPE spfli-cityfrom,
    cityto   TYPE spfli-cityto,
  END OF flight.
TYPES
  flights TYPE SORTED TABLE OF flight WITH UNIQUE KEY carrid connid.
SELECT \*
       FROM spfli
       INTO TABLE @DATA(spfli\_tab).
cl\_demo\_output=>display( CORRESPONDING flights( spfli\_tab ) ).

Executable Examples

-   [Component Operator for Structures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencorresponding_struct_abexa.htm)
-   [Component Operator for Internal Tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencorresponding_itab_abexa.htm)
-   [Component Operator for Table Expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencorresponding_table_exp_abexa.htm)

Addition   

... BASE ( base ) ...

Effect

The addition BASE can be used to specify a start value base for the created structure or internal table. base is a [functional operand position](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunctional_position_glosry.htm "Glossary Entry") in which a database convertible to the target type can be specified.

If the addition BASE is specified, the value of base is assigned to the target structure or target table in accordance with the general [assignment rules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconversion_rules.htm) before the remainder of the expression is evaluated. Here, the addition [duplicates](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencorresponding_constr_dupl.htm) after itab can be used to affect the behavior with respect to duplicate lines occurring in a target table.

Hints

-   Unlike the operators NEW and VALUE, parentheses must be set around base in CORRESPONDING .
-   Unlike the operators NEW and VALUE, the data type of base is not used in CORRESPONDING to determine a result type specified using #.
-   The addition BASE can be used with the component operator to replace the statement [MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmove-corresponding.htm) as follows:
    -   An assignment of structures
        
        struct2 = CORRESPONDING #( BASE ( struct2 ) struct1 ).
        is the same as an assignment
        MOVE-CORRESPONDING struct1 TO struct2.
        
    -   An assignment of internal tables
        
        itab2 = CORRESPONDING #( BASE ( itab2 ) itab1 ).
        is the same as an assignment
        MOVE-CORRESPONDING itab1 TO itab2 KEEPING TARGET LINES.
        

Example

Assignment of results of the component operator without and with addition BASE to existing structures of the same content. The value of the component that does not exist in the source structure is only preserved if BASE is used.

DATA:
  BEGIN OF src,
    a TYPE i VALUE 1,
    b TYPE i VALUE 2,
  END OF src,
  BEGIN OF target1,
    b TYPE i VALUE 11,
    c TYPE i VALUE 12,
  END OF target1.
DATA(target2) = target1.
target1 = CORRESPONDING #( src ).
target2 = CORRESPONDING #( BASE ( target2 ) src ).
cl\_demo\_output=>new( )->write( target1 )->display( target2 ).