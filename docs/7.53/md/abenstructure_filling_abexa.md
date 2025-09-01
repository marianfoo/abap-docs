  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Structures](javascript:call_link\('abendata_objects_structure.htm'\)) →  [Examples of structures](javascript:call_link\('abenstructure_abexas.htm'\)) → 

Filling a Structure

The example demonstrates the filling of a nested structure.

Source Code

REPORT demo\_structure\_filling.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    TYPES:
      BEGIN OF name\_type,
        title   TYPE string,
        prename TYPE string,
        surname TYPE string,
      END OF name\_type,
      BEGIN OF street\_type,
        name   TYPE string,
        number TYPE string,
      END OF street\_type,
      BEGIN OF city\_type,
        zipcode TYPE string,
        name    TYPE string,
      END OF city\_type,
      BEGIN OF address\_type,
        name   TYPE name\_type,
        street TYPE street\_type,
        city   TYPE city\_type,
      END OF address\_type.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: name TYPE name\_type,
          addr TYPE address\_type.
    name-title   = \`Mr.\`.
    name-prename = \`Duncan\`.
    name-surname = \`Pea\`.
    addr-name = name.
    addr-street-name   = \`Vegetable Lane\`.
    addr-street-number = \`11\`.
    addr-city-zipcode = \`349875\`.
    addr-city-name    = \`Botanica\`.
    DATA(address) =
      VALUE address\_type(
        name-title   = \`Mr.\`
        name-prename = \`Duncan\`
        name-surname = \`Pea\`
        street = VALUE #( name   = \`Vegetable Lane\`
                          number = \`11\` )
        city   = VALUE #( zipcode = \`349875\`
                          name    = \`Botanica\` ) ).
    ASSERT address = addr.
    cl\_demo\_output=>new(
      )->write( address-name
      )->write( address-street
      )->write( address-city
      )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

In this example, the structure from the executable example [Declaring a Nested Structure](javascript:call_link\('abennested_structure_abexa.htm'\)) is defined with [TYPES](javascript:call_link\('abaptypes_struc.htm'\)) as the data type address\_type and used for the data objects addr and address. A structure type is also defined for each separate substructure.

If a structure is declared by reference to a structure type, as shown here, the addition [VALUE](javascript:call_link\('abapdata_options.htm'\)) cannot be used. Instead, the structure must be filled by accessing the components. In particular, this also applies to the frequently occurring reference to structures of the ABAP Dictionary.

-   In the first part of the method main, the structure addr is filled by using the structure component selector. The component name is assigned a prefilled structure. In the components street and city, the components that are nested there are accessed.

-   In the second part of the method main, the structure address is filled with the value operator [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)), but the structure itself is created using an inline declaration. The parentheses after VALUE show different options for accessing the components of substructures. Either the structure component selector is used again, as with the substructure name, or additional VALUE operators are nested, as with street and city.

The content of the two structures is the same. The value operator VALUE can be used to replace many fully spelled names simply by using parentheses.