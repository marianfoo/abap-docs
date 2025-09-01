  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Language Environment](javascript:call_link\('abenlanguage.htm'\)) →  [Language Settings](javascript:call_link\('abenlanguage_settings.htm'\)) →  [Text Environment Language and Text Environment](javascript:call_link\('abentext_environment.htm'\)) → 

Setting the Text Environment

This example demonstrates how to set the text environment explicitly.

Source Code

REPORT demo\_set\_locale.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA text\_tab TYPE HASHED TABLE OF string
                       WITH UNIQUE KEY table\_line.
    text\_tab = VALUE #(
      ( \`Cudar Vilmos\`  )
      ( \`Csernus G�bor\` ) ).
    SET LOCALE LANGUAGE 'E'.
    SORT text\_tab AS TEXT.
    cl\_demo\_output=>write( text\_tab ).
    SET LOCALE LANGUAGE 'H'.
    SORT text\_tab AS TEXT.
    cl\_demo\_output=>write( text\_tab ).
    SET LOCALE LANGUAGE ' '.
    cl\_demo\_output=>display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example shows the effect of the locale of the text environment on sort functions. In Hungarian text environments, "Cs" and "Cu" are sorted differently than in English environments.