---
title: "Modularization"
description: |
  Background The main programming model that was propagated before the implementation of ABAP Objects was structured programming: -   In this model, the programs are split into procedures as appropriate. -   Sequences, branches, and loops are the only control structures allowed. The implementation of
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmodularization_guidl.htm"
abapFile: "abenmodularization_guidl.htm"
keywords: ["loop", "do", "while", "if", "case", "method", "class", "data", "internal-table", "abenmodularization", "guidl"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarchitecture_gdl.htm) →  [Object-Oriented Programming](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobj_oriented_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Modularization, ABENMODULARIZATION_GUIDL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%
0ASuggestion for improvement:)

Modularization

Background   

The main programming model that was propagated before the implementation of ABAP Objects was structured programming:

-   In this model, the programs are split into procedures as appropriate.
-   Sequences, branches, and loops are the only control structures allowed.

The implementation of object-oriented programming languages such as ABAP Objects does not make structured programming obsolete. Object-oriented programming is based on the structured programming and enhances and supplements it.

With regard to ABAP, you must note that ABAP is still a programming language of the fourth generation (4GL) that has been developed especially for application programming in the SAP environment, that is, for mass data processing in business applications. Therefore, ABAP includes significantly more language elements than an elementary programming language in which the more complex functions are usually stored in libraries. This ranges from simple statements for string processing, which are provided as methods of string classes in other object-oriented languages such as Java, to the processing of complex mass data objects, such as internal tables, to very complex statements for operating interfaces such as ABAP SQL or for calling data transformations (XML), for which other languages have entire class hierarchies.

As already [mentioned](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobj_oriented_gdl.htm), the performance of the ABAP language is therefore optimized mainly for the execution of its complex statements for mass data processing and less for the individual method call.

Rule   

Modularize rather than atomize

Modularize your program in classes, but not to the extent that there is an individual method for every trivial function. Methods that consist of only one or just a few statements should be an exception in ABAP and not the rule.

Details   

You should only use [methods of ABAP Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obj_progr_model_guidl.htm "Guideline") for the implementation of functions; there are very good reasons for this. But ABAP remains ABAP, and the good reasons for using a well-structured program are not invalidated by the implementation of ABAP Objects. Indeed, the ABAP language elements proven and tested in so many application cases are still valid today, are undergoing continuously development, and should be used in their present form in ABAP Objects as well.

A well-structured classic ABAP program, for instance a function pool that fulfills a specific task and is modularized using subroutines, should therefore be transferable to a class without any major changes to the implementation, while being provided with all the additional benefits of ABAP Objects.

However, the modularization at the level of a few single statements is and will remain untypical for ABAP. On the one hand this is because of performance reasons, because the costs for the method call must remain low in comparison to the costs for executing the implementation. For example, instead of providing the get\_attribute methods typical for other object-oriented languages that only set their return value to the value of an attribute attribute, you should use public READ-ONLY attributes in ABAP. (If reads on an attribute are linked with further actions, for example, authorization checks, get\_attribute methods are appropriate of course.) On the other hand, virtually all non-fundamental statements of ABAP (all language elements that do not have any equivalent in an elementary language like Java) already play the same role that the methods of system classes assume in other programming languages. The use of a statement like this corresponds to a method call, and another encapsulation is usually not necessary.

Also, for legibility and maintainability reasons, a method with a [reasonable size](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenproc_volume_guidl.htm "Guideline") is preferable to splitting into atomic units, that is, into methods with only one or two statements.

Exception

Procedures that encapsulate nothing but the call of another procedure are an exception. A single procedure call represents the implementation of an entire procedure. This applies in particular to function modules and subroutines, which can only be created in [exceptional cases](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obj_progr_model_guidl.htm "Guideline") anyway. They should include exactly one [method call](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunct_module_subroutine_guidl.htm "Guideline"), which delegates the implementation to ABAP Objects. In this case, the improved security through the stricter checks in ABAP Objects outweighs the disadvantages of very short procedures.

Bad Example

The following source code shows the rudimentary implementation of a string class in ABAP Objects. The methods of this class each contain only a single statement. A consumer must create objects of the class and call the methods to handle the strings.

CLASS cl\_string DEFINITION PUBLIC.
   PUBLIC SECTION.
     METHODS:
       constructor IMPORTING value        TYPE string OPTIONAL,
       set\_string  IMPORTING value        TYPE string,
       get\_string  RETURNING VALUE(value) TYPE string,
       shift\_left  IMPORTING places       TYPE i,
       shift\_right IMPORTING places       TYPE i,
       ...
    PRIVATE SECTION.
      DATA string TYPE string.
ENDCLASS.

CLASS cl\_string IMPLEMENTATION.
   METHOD constructor.
     string = value.
   ENDMETHOD.
   METHOD set\_string.
     string = value.
   ENDMETHOD.
   METHOD get\_string.
     value = string.
   ENDMETHOD.
   METHOD shift\_left.
     SHIFT string LEFT BY places PLACES.
   ENDMETHOD.
   METHOD shift\_right.
     SHIFT string RIGHT BY places PLACES.
   ENDMETHOD.
   ...
ENDCLASS.
...

CLASS application IMPLEMENTATION.
  ...
   METHOD do\_something.
     DATA string TYPE REF TO cl\_string.
     CREATE OBJECT string EXPORTING value = 'abcde'.
     ...
     string->shift\_left( ... ).
     ...
    ENDMETHOD.
  ...
ENDCLASS.

Good Example

The following source code shows the handling of strings typical to ABAP. A method directly declares a data object of type string and directly uses the corresponding ABAP statements for processing.

CLASS application IMPLEMENTATION.
  ...
   METHOD do\_something.
     DATA string TYPE string.
     ...
     SHIFT string LEFT BY ... PLACES.
     ...
   ENDMETHOD.
  ...
ENDCLASS.

There is a corresponding built-in function for almost every string processing statement. They can also be used in operand positions, negating another reason for the encapsulation of statements in methods. The statement SHIFT LEFT in this example can be replaced as follows, whereas shift\_left is a built-in function:

string = shift\_left( val = string places = ... ).