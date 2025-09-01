# ABAP Keyword Documentation / ABAP − Reference / Processing Internal Data / Assignments / Assigning Structure Components / CL_ABAP_CORRESPONDING - System Class

Included pages: 4


### abencl_abap_corresponding.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_assignments.htm) →  [Assigning Structure Components](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencorresponding.htm) → 

CL\_ABAP\_CORRESPONDING - System Class

The system class CL\_ABAP\_CORRESPONDING enables assignments of components between structures or between internal tables with dynamically specified mapping rules. Methods are available for simple assignments, assignments of default values, and for using a lookup table.

-   [CL\_ABAP\_CORRESPONDING - Simple Assignment](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_corresponding_1.htm)

-   [CL\_ABAP\_CORRESPONDING - Assignment of Default Values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_corresponding_3.htm)

-   [CL\_ABAP\_CORRESPONDING - Lookup Table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_corresponding_2.htm)

Continue
[CL\_ABAP\_CORRESPONDING - Simple Assignment](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_corresponding_1.htm)
[CL\_ABAP\_CORRESPONDING - Assignment of Values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_corresponding_3.htm)
[CL\_ABAP\_CORRESPONDING - Lookup Table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_corresponding_2.htm)


### abencl_abap_corresponding_1.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_assignments.htm) →  [Assigning Structure Components](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencorresponding.htm) →  [CL\_ABAP\_CORRESPONDING - System Class](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_corresponding.htm) → 

CL\_ABAP\_CORRESPONDING - Simple Assignment

The methods CREATE and EXECUTE of the system class CL\_ABAP\_CORRESPONDING can be used to assigned components between structure or between internal tables with a dynamically specified mapping rule.

The factory method CREATE is used to create a mapping object:

DATA(mapper) = cl\_abap\_corresponding=>create( source                = struct*|*itab
                                              destination           = struct*|*itab
                                              mapping               = mapping\_tab
                                              discarding\_duplicates = flag ).

Structures struct or internal tables itab of the assigned data types must be passed to the parameters source and destination. An internal table of the type CL\_ABAP\_CORRESPONDING=>MAPPING\_TABLE, containing the mapping rule, must be passed to the parameter mapping. If an initial mapping table is passed, only the identically named components are assigned. The mapping table has the following components:

-   LEVEL

Level of the components in the structure or row structure. The value 0 stands for the top level.

-   KIND

Mapping type. The possible values are:

-   CL\_ABAP\_CORRESPONDING=>MAPPING\_COMPONENT (1) (The components specified in this row are mapped to each other.)

-   CL\_ABAP\_CORRESPONDING=>MAPPING\_EXCEPT\_COMPONENT (2) (The component of the source structure specified in this row is excluded from the mapping of identically named components.)

-   CL\_ABAP\_CORRESPONDING=>MAPPING\_EXCEPT\_ALL (3) (All components of the current source structure are excluded from the mapping of identically name components.)

-   CL\_ABAP\_CORRESPONDING=>MAPPING\_DISCARDING\_DUPLICATES (9) (In a source table, duplicate rows are ignored as when using [DISCARDING DUPLICATES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencorresponding_constr_dupl.htm) in a mapping rule of the component operator. The target table must have a unique table key.)

-   SRCNAME

Component of the source structure.

-   DSTNAME

Component of the target (destination) structure.

The rows of the internal table must be constructed so that they produce a mapping rule in the correct order. Components of the source structure for which no mapping is defined and that were not excluded are assigned to identically named components of the target structure.

The method EXECUTE of a mapping object can be used to perform any number of assignments between structures or internal tables src and dst whose data type matches the source type or target type specified when the object was created:

mapper->execute( EXPORTING source      = src
                 CHANGING  destination = dst ).

The assignment is performed component by component

-   between the components specified in the mapping rule

-   between the remaining identically named components at the same level (if not excluded in the mapping rule).

In assignments between structures, components of the target structure to which no components of the source structure are assigned keep their previous value, like the statement [MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmove-corresponding.htm) and like the operator [CORRESPONDING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencorresponding_constr_arg_type.htm) with the addition BASE. Any nested internal tables are always resolved, as when the addition EXPANDING NESTED TABLES is specified in MOVE-CORRESPONDING or the addition DEEP for the operator CORRESPONDING. In assignments between internal tables, the target table is always initialized first. There is no matching addition for the addition KEEPING TARGET LINES in MOVE-CORRESPONDING or BASE in CORRESPONDING.

If the value "X" was passed to the parameter DISCARDING\_DUPLICATES of the method CREATE, duplicate rows are handled in tabular component assignments in the same way as when using the addition [DISCARDING DUPLICATES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencorresponding_constr_dupl.htm) in the basic form of the component operator. Here, the target table must have a unique table key.

The source and the target may be the same. It should be noted, however, the target object is used directly (like in the statement [MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmove-corresponding.htm)) and that no temporary intermediate result is created (unlike with the operator [CORRESPONDING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencorresponding_constr_arg_type.htm)).

Incorrect parameters passed to the methods of the class CL\_ABAP\_CORRESPONDING raised exceptions of the class CX\_CORR\_DYN\_ERROR.

Notes

-   The methods CREATE and EXECUTE of the system class CL\_ABAP\_CORRESPONDING produce an assignment similar to the statement

dst = [CORRESPONDING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencorresponding_constr_arg_type.htm)  #( BASE ( dst ) struct*|*itab [MAPPING ... EXCEPT ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencorresponding_constr_mapping.htm) ).

Here, the [mapping rule](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencorresponding_constr_mapping.htm) is specified dynamically, however, as the content of a special internal table.

-   The same restrictions apply as in the operator [CORRESPONDING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencorresponding_constr_arg_type.htm). Components can only be mapped to each other if they are on the same level. Components in a substructure cannot be assigned to the components at higher levels, nor higher level components to components in a substructure.

-   The class CL\_ABAP\_CORRESPONDING always resolves tabular components, which is the same behavior as the operator [CORRESPONDING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencorresponding_constr_arg_type.htm) when a mapping rule is specified. In this case, the addition DEEP is also set implicitly.

-   To achieve the same results for standalone in assignments between structures as in the operator [CORRESPONDING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencorresponding_constr_arg_type.htm) without BASE, an initial structure can be assigned to the parameter destination.

-   In reflexive assignments between components of the same object, it should be noted that (like in [MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmove-corresponding.htm)) the editing order is not defined and that a call of the method EXECUTE cannot be used to switch the content of two components. See the executable example [Reflexive Component Assignments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreflexive_corresponding_abexa.htm).

-   The [pseudo component](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpseudo_component_glosry.htm "Glossary Entry") table\_line cannot be addressed in the mapping table.

Example

Uses the class CL\_ABAP\_CORRESPONDING for assignments of components to a simple structure. The mapping rule dictates that the components a3 are assigned to b1 and a1 to b3. The component a2 is ignored since there are no identically named components in the target structure and b2 keeps its value. a4 and a5 in the target structure also keep their values, however, even though the source structure contains identically named components. This is because the value of CL\_ABAP\_CORRESPONDING=>MAPPING\_EXCEPT\_ALL is specified for the mapping type for all non-specified components. The executable [example for simple structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_corr_dyn_abexa.htm) enables interactive input of the component names that are mapped to each other.

DATA:
  BEGIN OF struct1,
    a1 TYPE string VALUE 'a1',
    a2 TYPE string VALUE 'a2',
    a3 TYPE string VALUE 'a3',
    a4 TYPE string VALUE 'a4',
    a5 TYPE string VALUE 'a5',
  END OF struct1,
  BEGIN OF struct2,
    b1 TYPE string VALUE 'b1',
    b2 TYPE string VALUE 'b2',
    b3 TYPE string VALUE 'b3',
    a4 TYPE string VALUE 'b4',
    a5 TYPE string VALUE 'b5',
  END OF struct2.
DATA(mapper) =
  cl\_abap\_corresponding=>create(
    source            = struct1
    destination       = struct2
    mapping           = VALUE cl\_abap\_corresponding=>mapping\_table(
      ( level = 0 kind = 1 srcname = 'a1' dstname = 'b3' )
      ( level = 0 kind = 1 srcname = 'a3' dstname = 'b1' )
      ( level = 0 kind = 3 ) ) ).
mapper->execute( EXPORTING source      = struct1
                 CHANGING  destination = struct2 ).
cl\_demo\_output=>display( struct2 ).

Executable Examples

-   [CL\_ABAP\_CORRESPONDING for Simple Structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_corr_dyn_abexa.htm)

-   [CL\_ABAP\_CORRESPONDING for Nested Structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_corr_struc_abexa.htm)

-   [CL\_ABAP\_CORRESPONDING for Internal Tables](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_corr_itab_abexa.htm)

-   [CL\_ABAP\_CORRESPONDING for Tabular Components](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_corr_deep_abexa.htm)


### abencl_abap_corresponding_3.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_assignments.htm) →  [Assigning Structure Components](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencorresponding.htm) →  [CL\_ABAP\_CORRESPONDING - System Class](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_corresponding.htm) → 

CL\_ABAP\_CORRESPONDING - Assignment of Values

The method CREATE\_WITH\_VALUE of the system class CL\_ABAP\_CORRESPONDING has essentially the same function as the method [CREATE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_corresponding_1.htm). Additionally, the values of any data objects can be assigned to the components of the target structure or target table.

The factory method CREATE\_WITH\_VALUE is used to create a mapping object:

DATA(mapper) =
  cl\_abap\_corresponding=>create\_with\_value( source                = struct*|*itab
                                            destination           = struct*|*itab
                                            mapping               = mapping\_tab
                                            discarding\_duplicates = flag ).

For the parameters source and destination, the same applies as to the method [CREATE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_corresponding_1.htm). An internal table of the type CL\_ABAP\_CORRESPONDING=>MAPPING\_TABLE\_VALUE, containing the mapping rule, must be passed to the parameter mapping. This mapping table has the same components, with the same meaning, as a mapping table of type [CL\_ABAP\_CORRESPONDING=>MAPPING\_TABLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_corresponding_1.htm), with an additional column and further values for the column KIND:

-   VALUE

In this column, a reference to a suitable data object can be specified, whose value is assigned to the component of the target structure that is specified in DSTNAME.

-   KIND

The additional values for the mapping type are:

-   CL\_ABAP\_CORRESPONDING=>MAPPING\_VALUE (16), the value specified in VALUE is always assigned. The column SRCNAME must be initial

-   CL\_ABAP\_CORRESPONDING=>MAPPING\_DEFAULT\_VALUE (32), the value specified in VALUE is only assigned if the component specified in the column SRCNAME is initial. The component name in SRCNAME must exist in the source structure.

A mapping object created with CREATE\_WITH\_VALUE is used like a mapping object created with [CREATE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_corresponding_1.htm) with the method EXECUTE.

Example

The component b2 is given the value xxx and the component b3 is given the value yyy. The components b1 and b4 are given the values of the associated components a1 and a4 of the source structure.

DATA:
  BEGIN OF struct1,
    a1 TYPE string VALUE 'a1',
    a2 TYPE string VALUE 'a2',
    a3 TYPE string VALUE '  ',
    a4 TYPE string VALUE 'a4',
  END OF struct1,
  BEGIN OF struct2,
    b1 TYPE string VALUE 'b1',
    b2 TYPE string VALUE 'b2',
    b3 TYPE string VALUE 'b3',
    b4 TYPE string VALUE 'b4',
  END OF struct2.
DATA(mapper) =
  cl\_abap\_corresponding=>create\_with\_value(
    source            = struct1
    destination       = struct2
    mapping           = VALUE
      cl\_abap\_corresponding=>mapping\_table\_value(
        ( level = 0 kind = 1  srcname = 'a1' dstname = 'b1' )
        ( level = 0 kind = 16                dstname = 'b2'
                                             value = REF #( \`xxx\` ) )
        ( level = 0 kind = 32 srcname = 'a3' dstname = 'b3'
                                             value = REF #( \`yyy\` ) )
        ( level = 0 kind = 32 srcname = 'a4' dstname = 'b4'
                                             value = REF #( \`zzz\` ) )
         ) ).
mapper->execute( EXPORTING source      = struct1
                 CHANGING  destination = struct2 ).
cl\_demo\_output=>display( struct2 ).


### abencl_abap_corresponding_2.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenvalue_assignments.htm) →  [Assigning Structure Components](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencorresponding.htm) →  [CL\_ABAP\_CORRESPONDING - System Class](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_corresponding.htm) → 

CL\_ABAP\_CORRESPONDING - Lookup Table

The methods CREATE\_USING and EXECUTE\_USING of the system class CL\_ABAP\_CORRESPONDING can be used to assign components between internal tables with a dynamically specified mapping rule. The source table is used as a lookup table.

The factory method CREATE\_USING is used to create a mapping object:

DATA(mapper) = cl\_abap\_corresponding=>create\_using( destination = itab
                                                    using       = lookup\_tab
                                                    mapping     = mapping\_tab ).

Internal tables itab and lookup\_table, with the table types to which the assignment applies, must be passed to the parameters destination and using. An internal table of the type CL\_ABAP\_CORRESPONDING=>MAPPING\_TABLE, containing the mapping rule, must be passed to the parameter mapping. The mapping table has the same components as the methods for [simple assignments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_corresponding_1.htm) with the following special semantics:

-   KIND

Mapping type. The additional possible values are:

-   CL\_ABAP\_CORRESPONDING=>USING\_KEY (4), the table key of the lookup table used for the evaluation is specified in the component SRCNAME in this row. The table must contain a row like this.

-   CL\_ABAP\_CORRESPONDING=>MAPPING\_USING\_COMPONENT (5), the name of a column of the lookup table in SRCNAME is associated with the name of a column of the target table in DSTNAME in a row like this. All key fields of the table key used must be covered by a row like this.

The mapping types for [simple assignments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_corresponding_1.htm) can also be used and have the same semantics as described here.

The method EXECUTE\_USING of a mapping object can be used to perform any number of assignments between tables lookup\_src and dst whose data type matches the source type or target type lookup\_tab or itab specified when the object was created:

mapper->execute\_using( EXPORTING using       = lookup\_src
                       CHANGING  destination = dst ).

For each row in dst, a row is found in the lookup table lookup\_src that matches this row in accordance with the relationship defined using the mapping type CL\_ABAP\_CORRESPONDING=>MAPPING\_USING\_COMPONENT in the mapping table. If the key is not unique, the first row found is used. If no row like this is found, the row from dst remains unchanged. If a row like this is found in lookup\_src, it is assigned to the row from dst in accordance with the rules of [MOVE-CORRESPONDING for structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmove-corresponding_structure.htm) using the addition EXPANDING NESTED TABLES, with the following exception. The components used for the search are not assigned by default. The rows in the mapping table with mapping types for [simple assignments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_corresponding_1.htm) can be used to override the default assignment of identically named components and the default exclusion of the components used for the search. It is not possible to specify the same table for dst and lookup\_src; if specified, the runtime error CORRESPONDING\_SELF occurs.

Notes

-   The methods CREATE\_USING and EXECUTE\_USING of the system class CL\_ABAP\_CORRESPONDING produce an assignment similar to the statement

dst = [CORRESPONDING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencorresponding_constr_using.htm) #( dst FROM lookup\_tab KEY key\_name ... ).

Here, however. the columns used to synchronize the target table and lookup table, plus the [mapping rule](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencorresponding_constr_mapping.htm) are specified dynamically as the content of a special internal table.

-   In the mapping table, the columns of the target table dst are part of the column DSTNAME, regardless of the mapping type, and the columns of the lookup table are part of the column SRCNAME. In the [CORRESPONDING](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencorresponding_constr_using.htm) operator, however, the arrangement of the operands after USING is different from the arrangement after MAPPING.

Example

The example displays the implementation of an example for component operator [CORRESPONDING with lookup table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencorresponding_constr_using.htm) to class CL\_ABAP\_CORRESPONDING.

TYPES:
  BEGIN OF line,
    value   TYPE i,
    comment TYPE string,
  END OF line,
  itab1 TYPE STANDARD TABLE OF line WITH EMPTY KEY,
  itab2 TYPE HASHED TABLE OF line WITH UNIQUE KEY value.
DATA(itab1) = VALUE itab1( FOR i = 1 UNTIL i >= 10 ( value = i ) ).
DATA(itab2) = VALUE itab2( ( value = 2 comment = \`...\` )
                           ( value = 3 comment = \`...\` )
                           ( value = 5 comment = \`...\` )
                           ( value = 8 comment = \`...\` ) ).
DATA(mapping\_tab) = VALUE cl\_abap\_corresponding=>mapping\_table(
  ( level = 0 kind = 4 srcname = 'PRIMARY\_KEY' )
  ( level = 0 kind = 5 srcname = 'VALUE' dstname = 'VALUE' ) ).
cl\_abap\_corresponding=>create\_using(
     destination       = itab1
     using             = itab2
     mapping               = mapping\_tab
     )->execute\_using( EXPORTING using       = itab2
                       CHANGING  destination = itab1 ).
cl\_demo\_output=>display( itab1 ).

Executable Example

[CL\_ABAP\_CORRESPONDING with Lookup Table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_corr_lookup_abexa.htm)
