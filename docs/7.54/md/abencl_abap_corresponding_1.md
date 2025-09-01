  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assigning Structure Components](javascript:call_link\('abencorresponding.htm'\)) →  [CL\_ABAP\_CORRESPONDING - System Class](javascript:call_link\('abencl_abap_corresponding.htm'\)) → 

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

-   CL\_ABAP\_CORRESPONDING=>MAPPING\_DISCARDING\_DUPLICATES (9) (In a source table, duplicate rows are ignored as when using [DISCARDING DUPLICATES](javascript:call_link\('abencorresponding_constr_dupl.htm'\)) in a mapping rule of the component operator. The target table must have a unique table key.)

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

In assignments between structures, components of the target structure to which no components of the source structure are assigned keep their previous value, like the statement [MOVE-CORRESPONDING](javascript:call_link\('abapmove-corresponding.htm'\)) and like the operator [CORRESPONDING](javascript:call_link\('abencorresponding_constr_arg_type.htm'\)) with the addition BASE. Any nested internal tables are always resolved, as when the addition EXPANDING NESTED TABLES is specified in MOVE-CORRESPONDING or the addition DEEP for the operator CORRESPONDING. In assignments between internal tables, the target table is always initialized first. There is no matching addition for the addition KEEPING TARGET LINES in MOVE-CORRESPONDING or BASE in CORRESPONDING.

If the value "X" was passed to the parameter DISCARDING\_DUPLICATES of the method CREATE, duplicate rows are handled in tabular component assignments in the same way as when using the addition [DISCARDING DUPLICATES](javascript:call_link\('abencorresponding_constr_dupl.htm'\)) in the basic form of the component operator. Here, the target table must have a unique table key.

The source and the target may be the same. It should be noted, however, the target object is used directly (like in the statement [MOVE-CORRESPONDING](javascript:call_link\('abapmove-corresponding.htm'\))) and that no temporary intermediate result is created (unlike with the operator [CORRESPONDING](javascript:call_link\('abencorresponding_constr_arg_type.htm'\))).

Incorrect parameters passed to the methods of the class CL\_ABAP\_CORRESPONDING raised exceptions of the class CX\_CORR\_DYN\_ERROR.

Notes

-   The methods CREATE and EXECUTE of the system class CL\_ABAP\_CORRESPONDING produce an assignment similar to the statement

dst = [CORRESPONDING](javascript:call_link\('abencorresponding_constr_arg_type.htm'\))  #( BASE ( dst ) struct*|*itab [MAPPING ... EXCEPT ...](javascript:call_link\('abencorresponding_constr_mapping.htm'\)) ).

Here, the [mapping rule](javascript:call_link\('abencorresponding_constr_mapping.htm'\)) is specified dynamically, however, as the content of a special internal table.

-   The same restrictions apply as in the operator [CORRESPONDING](javascript:call_link\('abencorresponding_constr_arg_type.htm'\)). Components can only be mapped to each other if they are on the same level. Components in a substructure cannot be assigned to the components at higher levels, nor higher level components to components in a substructure.

-   The class CL\_ABAP\_CORRESPONDING always resolves tabular components, which is the same behavior as the operator [CORRESPONDING](javascript:call_link\('abencorresponding_constr_arg_type.htm'\)) when a mapping rule is specified. In this case, the addition DEEP is also set implicitly.

-   To achieve the same results for standalone in assignments between structures as in the operator [CORRESPONDING](javascript:call_link\('abencorresponding_constr_arg_type.htm'\)) without BASE, an initial structure can be assigned to the parameter destination.

-   In reflexive assignments between components of the same object, it should be noted that (like in [MOVE-CORRESPONDING](javascript:call_link\('abapmove-corresponding.htm'\))) the editing order is not defined and that a call of the method EXECUTE cannot be used to switch the content of two components. See the executable example [Reflexive Component Assignments](javascript:call_link\('abenreflexive_corresponding_abexa.htm'\)).

-   The [pseudo component](javascript:call_link\('abenpseudo_component_glosry.htm'\) "Glossary Entry") table\_line cannot be addressed in the mapping table.

Example

Uses the class CL\_ABAP\_CORRESPONDING for assignments of components to a simple structure. The mapping rule dictates that the components a3 are assigned to b1 and a1 to b3. The component a2 is ignored since there are no identically named components in the target structure and b2 keeps its value. a4 and a5 in the target structure also keep their values, however, even though the source structure contains identically named components. This is because the value of CL\_ABAP\_CORRESPONDING=>MAPPING\_EXCEPT\_ALL is specified for the mapping type for all non-specified components. The executable [example for simple structures](javascript:call_link\('abencl_abap_corr_dyn_abexa.htm'\)) enables interactive input of the component names that are mapped to each other.

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

-   [CL\_ABAP\_CORRESPONDING for Simple Structures](javascript:call_link\('abencl_abap_corr_dyn_abexa.htm'\))

-   [CL\_ABAP\_CORRESPONDING for Nested Structures](javascript:call_link\('abencl_abap_corr_struc_abexa.htm'\))

-   [CL\_ABAP\_CORRESPONDING for Internal Tables](javascript:call_link\('abencl_abap_corr_itab_abexa.htm'\))

-   [CL\_ABAP\_CORRESPONDING for Tabular Components](javascript:call_link\('abencl_abap_corr_deep_abexa.htm'\))