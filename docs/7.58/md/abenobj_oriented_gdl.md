  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarchitecture_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Object-Oriented%20Programming%2C%20ABENOBJ_ORIENTED_GDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Object-Oriented Programming

Achieving an optimal object-oriented design is not an easy task and this is not the subject of these programming guidelines. It is definitely worth consulting the relevant literature for this topic. The rules below are limited to basic recommendations (for making source codes easier to understand and maintain) and ABAP specifics on working with global and local classes.

Developers who have experience with object-oriented development in other programming languages should be aware of the differences between ABAP Objects and Java:

-   In Java, all superior data objects (especially container variables such as strings) are modeled using classes. By contrast, ABAP provides very powerful, built-in types. Besides the built-in ABAP strings, internal tables are also provided that are used for structured data storage. These tables represent the most powerful ABAP type. Therefore, it is generally not beneficial to implement own container types using ABAP classes.
-   Java reaches a high processing speed for methods, by using optimizations and JIT compilation. In ABAP, however, the high processing speed is primarily attained using very powerful and complex individual statements. This is another reason why implementing own container classes is usually not beneficial. Direct access to a suitable internal table, for example, is always faster than handwritten access logic in ABAP.

Of course, you can transfer algorithms and a general class structure to ABAP, from an application written in another object-oriented programming language. However, the greater the depth, the greater the differences. Therefore, you need to make appropriate modifications to map a detailed design in a different language to ABAP Objects.

-   [Encapsulation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenencapsulation_guidl.htm "Guideline")
-   [Modularization](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmodularization_guidl.htm "Guideline")
-   [Static Classes and Singletons](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstatic_class_singleton_guidl.htm "Guideline")
-   [Inheritance](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_guidl.htm "Guideline")
-   [Class References and Interface References](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_ref_interf_ref_guidl.htm "Guideline")
-   [Local Types for Global Classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlocal_type_glob_class_guidl.htm "Guideline")
-   [Instance Constructor](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninstance_constructor_guidl.htm "Guideline")

Continue
[Encapsulation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenencapsulation_guidl.htm)
[Modularization](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmodularization_guidl.htm)
[Static Classes and Singletons](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstatic_class_singleton_guidl.htm)
[Inheritance](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninheritance_guidl.htm)
[Class References and Interface References](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_ref_interf_ref_guidl.htm)
[Local Types for Global Classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlocal_type_glob_class_guidl.htm)
[Instance Constructor](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninstance_constructor_guidl.htm)