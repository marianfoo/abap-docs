  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Architecture](javascript:call_link\('abenarchitecture_gdl.htm'\)) →  [Object-Oriented Programming](javascript:call_link\('abenobj_oriented_gdl.htm'\)) → 

Local Types for Global Classes

Background

Within [class pools](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry"), as in virtually any other ABAP program, data types, local interfaces, and local classes can be defined to ensure a better structure of the implementation of the global class. From a technical point of view, these optional declaration parts, together with the declaration part of the global class, form the global declaration part of the [class pool](javascript:call_link\('abenglobal_declar_guidl.htm'\) "Guideline").

These local declarations in a class pool are invisible outside the class pool, which means they can only be used as followed:

-   In the private visibility section (PRIVATE SECTION) of the declarations in the global class
-   Within the method implementations in the global class

These two usage types have different technical visibility requirements because friends of a global class have access to its private visibility section. Local type declarations that are used in the PRIVATE SECTION must therefore be accessible for any possible friends of the class, whereas those type declarations that are only used within the method implementations are completely meaningless for other classes.

In general, local classes consist of the declaration part and the associated method implementations. These are invisible to the friends of the global class and have thus technically the same visibility requirements as local type declarations that are only used within the implementation.

Local data types, interfaces, and classes within a class pool are saved in dedicated include programs. The following two areas are distinguished:

-   Class-relevant local definitions
-   Local definitions and implementations (Local types in [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry")).

These areas match the different technical visibility requirements. The internal names of the include programs end with CCDEF or CCIMP, which is why they are also known as [CCDEF includes](javascript:call_link\('abenccdef_glosry.htm'\) "Glossary Entry") and [CCIMP includes](javascript:call_link\('abenccimp_glosry.htm'\) "Glossary Entry").

Rule

Position local declarations appropriately

Position the local declarations of a class pool at appropriate positions depending on the requirements. Types that are only used within the implementation of the global class need to be in a different position than types that are also addressed in the PRIVATE SECTION of the global class.

Details

From the perspective of a class pool, all local type definitions and the associated implementations of local classes can be saved in the [CCDEF include](javascript:call_link\('abenccdef_glosry.htm'\) "Glossary Entry"). However, such an approach is disadvantageous from the dependency management perspective. Dependent classes (subclasses and friends of the global class) only have to be invalidated for changes to the local type declarations of a class pool that are used in the PRIVATE SECTION of the global class. But technically speaking, this invalidation occurs for all changes in the [CCDEF include](javascript:call_link\('abenccdef_glosry.htm'\) "Glossary Entry"). For this reason, the additional [CCIMP include](javascript:call_link\('abenccimp_glosry.htm'\) "Glossary Entry") exists which is intended for local type declarations that are only used within the class implementation of the global class, and for the implementation part of local classes. If this area is changed, dependent classes are not invalidated.

To prevent unnecessary new generations of other classes that are based on unwanted technical dependencies, the class-local types must be defined in the class pool at the appropriate positions after changes have been made to the global class:

-   All types used only within the method implementations of the global class should be declared in the [CCIMP include](javascript:call_link\('abenccimp_glosry.htm'\) "Glossary Entry"). The local classes should be implemented here as well.
-   Only those types that can also be referenced in the PRIVATE SECTION should be defined in the [CCDEF include](javascript:call_link\('abenccdef_glosry.htm'\) "Glossary Entry").

Declarations and implementations of a local class are only supposed to be distributed across the CCDEF include and the CCIMP include if they are to be referenced in the PRIVATE SECTION. However, if the local class is only used within the implementation of the global class, both the declaration and the implementation are to be carried out in the CCIMP include.

Note

The rule specified here specializes the general rule [implement global declarations centrally](javascript:call_link\('abenglobal_declar_guidl.htm'\) "Guideline") with respect to class pools. They are especially oriented toward the external call of methods of their respective global class and are therefore particularly integrated within a dependency network. For this reason, the rule just mentioned cannot apply to its full extent.

Hint

[Test classes](javascript:call_link\('abentest_class_glosry.htm'\) "Glossary Entry") should only be created in [test includes](javascript:call_link\('abentest_include_glosry.htm'\) "Glossary Entry").