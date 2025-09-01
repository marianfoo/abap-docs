---
title: "Filling a Structure"
description: |
  The example demonstrates the filling of a nested structure. Source Code REPORT demo_structure_filling. CLASS demo DEFINITION. PUBLIC SECTION. TYPES: BEGIN OF name_type, title   TYPE string, prename TYPE string, surname TYPE string, END OF name_type, BEGIN OF street_type, name   TYPE string, num
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstructure_filling_abexa.htm"
abapFile: "abenstructure_filling_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "types", "abenstructure", "filling", "abexa"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_objects_structure.htm) →  [Examples of structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstructure_abexas.htm) → 

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

In this example, the structure from the executable example [Declaring a Nested Structure](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennested_structure_abexa.htm) is defined with [TYPES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes_struc.htm) as the data type address\_type and used for the data objects addr and address. A structure type is also defined for each separate substructure.

If a structure is declared by reference to a structure type, as shown here, the addition [VALUE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata_options.htm) cannot be used. Instead, the structure must be filled by accessing the components. In particular, this also applies to the frequently occurring reference to structures of the ABAP Dictionary.

-   In the first part of the method main, the structure addr is filled by using the structure component selector. The component name is assigned a prefilled structure. In the components street and city, the components that are nested there are accessed.

-   In the second part of the method main, the structure address is filled with the value operator [VALUE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_value.htm), but the structure itself is created using an inline declaration. The parentheses after VALUE show different options for accessing the components of substructures. Either the structure component selector is used again, as with the substructure name, or additional VALUE operators are nested, as with street and city.

The content of the two structures is the same. The value operator VALUE can be used to replace many fully spelled names simply by using parentheses.