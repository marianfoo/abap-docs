  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_declarations.htm) →  [Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobjects_statements.htm) →  [DATA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata.htm) →  [DATA, BEGIN OF struc](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdata_struc.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Declaration%20of%20a%20Nested%20Structure%2C%20ABENNESTED_STRUCTURE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Declaration of a Nested Structure

This example demonstrates the declaration of a nested structure with substructures.

Source Code   

\* Public class definition
CLASS cl\_demo\_nested\_structure DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_nested\_structure IMPLEMENTATION.
  METHOD main.
    DATA:
      BEGIN OF address,
        BEGIN OF name,
          title   TYPE string VALUE \`Mr.\`,
          prename TYPE string VALUE \`Duncan\`,
          surname TYPE string VALUE \`Pea\`,
        END OF name,
        BEGIN OF street,
          name   TYPE string VALUE \`Vegetable Lane\`,
          number TYPE string VALUE \`11\`,
        END OF street,
        BEGIN OF city,
          zipcode TYPE string VALUE \`349875\`,
          name    TYPE string VALUE \`Botanica\`,
        END OF city,
      END OF address.
    out->write( address-name
      )->write( address-street
      )->write( address-city ).
  ENDMETHOD.
ENDCLASS.

Description   

Declaration of a nested local structure address with three structured components. When the method DISPLAY of class CL\_DEMO\_OUTPUT is called, each substructure is addressed using the structure component selector (\-).