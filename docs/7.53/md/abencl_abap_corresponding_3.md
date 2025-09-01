  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assigning Structure Components](javascript:call_link\('abencorresponding.htm'\)) →  [CL\_ABAP\_CORRESPONDING - System Class](javascript:call_link\('abencl_abap_corresponding.htm'\)) → 

CL\_ABAP\_CORRESPONDING - Assignment of Values

The method CREATE\_WITH\_VALUE of the system class CL\_ABAP\_CORRESPONDING has essentially the same function as the method [CREATE](javascript:call_link\('abencl_abap_corresponding_1.htm'\)). Additionally, the values of any data objects can be assigned to the components of the target structure or target table.

The factory method CREATE\_WITH\_VALUE is used to create a mapping object:

DATA(mapper) =
  cl\_abap\_corresponding=>create\_with\_value( source                = struct*|*itab
                                            destination           = struct*|*itab
                                            mapping               = mapping\_tab
                                            discarding\_duplicates = flag ).

For the parameters source and destination, the same applies as to the method [CREATE](javascript:call_link\('abencl_abap_corresponding_1.htm'\)). An internal table of the type CL\_ABAP\_CORRESPONDING=>MAPPING\_TABLE\_VALUE, containing the mapping rule, must be passed to the parameter mapping. This mapping table has the same components, with the same meaning, as a mapping table of type [CL\_ABAP\_CORRESPONDING=>MAPPING\_TABLE](javascript:call_link\('abencl_abap_corresponding_1.htm'\)), with an additional column and further values for the column KIND:

-   VALUE

In this column, a reference to a suitable data object can be specified, whose value is assigned to the component of the target structure that is specified in DSTNAME.

-   KIND

The additional values for the mapping type are:

-   CL\_ABAP\_CORRESPONDING=>MAPPING\_VALUE (16), the value specified in VALUE is always assigned. The column SRCNAME must be initial

-   CL\_ABAP\_CORRESPONDING=>MAPPING\_DEFAULT\_VALUE (32), the value specified in VALUE is only assigned if the component specified in the column SRCNAME is initial. The component name in SRCNAME must exist in the source structure.

A mapping object created with CREATE\_WITH\_VALUE is used like a mapping object created with [CREATE](javascript:call_link\('abencl_abap_corresponding_1.htm'\)) with the method EXECUTE.

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