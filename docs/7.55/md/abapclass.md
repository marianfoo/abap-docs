  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Classes and Interfaces (ABAP Objects)](javascript:call_link\('abenclasses_and_interfaces.htm'\)) → 

CLASS

[Short Reference](javascript:call_link\('abapclass_shortref.htm'\))

Syntax Forms

[Declaration Part of a Class](javascript:call_link\('abapclass_definition.htm'\))
1\. CLASS class DEFINITION *\[* [class\_options](javascript:call_link\('abapclass_options.htm'\))*\]*.
    *\[*PUBLIC SECTION.
      *\[*[components](javascript:call_link\('abenclass_component.htm'\))*\]**\]*
    *\[*PROTECTED SECTION.
      *\[*[components](javascript:call_link\('abenclass_component.htm'\))*\]**\]*
    *\[*PRIVATE SECTION.
      *\[*[components](javascript:call_link\('abenclass_component.htm'\))*\]**\]*
  ENDCLASS.
[Implementation Part of a Class](javascript:call_link\('abapclass_implementation.htm'\))
2\. CLASS class IMPLEMENTATION.
    ...
    METHOD ...
      ...
    ENDMETHOD.
    ...
  ENDCLASS.
[Publication of Classes](javascript:call_link\('abapclass_deferred.htm'\))
3\. CLASS class DEFINITION DEFERRED *\[*PUBLIC*\]*.
[Local Friends of Global Classes](javascript:call_link\('abapclass_local_friends.htm'\))
4\. CLASS class DEFINITION
              LOCAL FRIENDS class1 class2 ...
                            intf1  intf2  ...

Effect

The statement CLASS defines a class class, publishes it, or specifies properties.

-   The complete definition of a class consists of a [declaration part](javascript:call_link\('abapclass_definition.htm'\)) and an [implementation part](javascript:call_link\('abapclass_implementation.htm'\)), which are both introduced by CLASS and ended by ENDCLASS. In the declaration part, the properties of the class are specified, and its components are declared. In the implementation part, the methods of the class are implemented.

-   The variants of CLASS without ENDCLASS are used for the [publication of classes](javascript:call_link\('abapclass_deferred.htm'\)) in a program and the declaration of [local friends](javascript:call_link\('abapclass_local_friends.htm'\)) of a global class.

The statements CLASS and associated statements ENDCLASS can only be specified in the global context of a program. CLASS and ENDCLASS cannot be listed within classes, procedures, and processing blocks that are implemented internally as a procedure, that is, event blocks for [GET](javascript:call_link\('abapget-.htm'\)) and [AT SELECTION-SCREEN](javascript:call_link\('abapat_selection-screen.htm'\)) . This applies in particular to the variants of CLASS listed here, which are not closed using ENDCLASS.

Hints

-   The declaration part of a class, and the variants of CLASS that are not closed using ENDCLASS are handled like other declaration statements (DATA, TYPE, ...). In a processing block without a local context, they are handled like global program declarations and do not close the processing block.

-   The implementation part of a class works like a separate processing block and closes any other processing blocks.

-   The obsolete variant [CLASS ... DEFINITION LOAD](javascript:call_link\('abapclass_interface_load.htm'\)) was formerly used to load classes explicitly.

Continue
[CLASS, DEFINITION](javascript:call_link\('abapclass_definition.htm'\))
[CLASS, IMPLEMENTATION](javascript:call_link\('abapclass_implementation.htm'\))
[ENDCLASS](javascript:call_link\('abapendclass.htm'\))
[CLASS, DEFERRED](javascript:call_link\('abapclass_deferred.htm'\))
[CLASS, LOCAL FRIENDS](javascript:call_link\('abapclass_local_friends.htm'\))