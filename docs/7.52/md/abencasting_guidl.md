  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrobust_abap_guidl.htm) →  [Assignments, Calculations, and Other Types of Data Access](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenassignment_access_guidl.htm) → 

Casting

Background

Casting refers to the process of handling a data object by assuming a certain data type. This definition is different to the meaning of the concept in other programming languages, such as Java. Here, casting means a different concept which is referred to as 'conversion' in ABAP. Casting in ABAP is either explicit or implicit:

-   Explicit casting is possible by using the CASTING addition with the ASSIGN statement and by using the ASSIGNING addition in statements for processing internal tables. Assignments between reference variables allow [up casts](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenup_cast_glosry.htm "Glossary Entry") and [down casts](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendown_cast_glosry.htm "Glossary Entry"). Obsolete explicit casting is also possible for formal parameters and field symbols, if the STRUCTURE addition is used.

-   Implicit casting is sometimes performed for special assignments or during operand handling at certain operand positions. A common example is the handling of flat structures using character-like-only components as a single field of type c.

Rule

Avoid implicit casting

Avoid implicit casting. If a cast to another data type is required, it can usually be implemented explicitly using ASSIGN ... CASTING.

Details

Implicit casting can potentially occur if structures are used as follows:

-   Assignments between incompatible structures or structures and elementary data objects

-   Comparisons between structures and elementary data objects

-   Using structures in operand positions where elementary data objects are expected

-   Reads from the database using SELECT \* ... INTO wa

-   Using the INCREMENT addition for the ASSIGN statement

The use of implicit casting is prone to errors and produces source code that is difficult to understand. If the CASTING addition is used when handling field symbols, explicit casting can be implemented, which is easier to follow and understand. The explicit casting option is a very important reason to [use field symbols](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendyn_access_data_obj_guidl.htm "Guideline").

Bad Example

The following source code shows the assignment of a text string to a structure with only character-like components. An implicit casting occurs here, which is regarded as unwanted according to the above rule. The entire structure is handled as a text field of type c and length 6.

TYPES: BEGIN OF structure,
         comp1 TYPE c LENGTH 2,
         comp2 TYPE c LENGTH 4,
       END OF structure.
DATA structure TYPE structure.
DATA text TYPE string.
...
text        = ...
structure = text.

Good Example

The following source code improves the example above, by assigning the structure to a field symbol of type c. Explicit casting occurs. Only the character-like field symbol is used to handle the structure as a character-like field.

...
FIELD-SYMBOLS <text> TYPE c.
...
ASSIGN structure TO <text> CASTING.
<text> = ...