  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Declaring Data Objects](javascript:call_link\('abenobjects_statements.htm'\)) →  [DATA](javascript:call_link\('abapdata.htm'\)) →  [DATA, BEGIN OF struc](javascript:call_link\('abapdata_struc.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Declaration of a Simple Structure, ABENSIMPLE_STRUCTURE_ABEXA, 757%0D%0A%0D%0AError:%
0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Declaration of a Simple Structure

This example demonstrates the declaration of a simple structure.

Source Code   

REPORT demo\_simple\_structure.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA:
      BEGIN OF address,
        name   TYPE string VALUE \`Mr. Duncan Pea\`,
        street TYPE string VALUE \`Vegetable Lane 11\`,
        city   TYPE string VALUE \`349875 Botanica\`,
      END OF address.
    cl\_demo\_output=>display( address ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

Declaration of a simple local structure address with three elementary components to which start values are assigned. When the method DISPLAY of class CL\_DEMO\_OUTPUT is called, the whole structure is addressed.