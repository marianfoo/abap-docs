  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assignment and Conversion Rules](javascript:call_link\('abenconversion_rules.htm'\)) →  [Conversion Rules for Structures](javascript:call_link\('abenconversion_struc.htm'\)) → 

Structure Fragment View

The structure fragment view splits a structure into fragments. A fragment is a grouping of structure components of the same or similar data types. In nested structures, the elementary components on the lowest nesting depth are considered when forming fragments. The following parts of a structure are each grouped to form fragments:

-   Consecutive [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") character-like components of the types c, n, d, and t, between which there are no [alignment gaps](javascript:call_link\('abenalignment_gap_glosry.htm'\) "Glossary Entry"), form character-like fragments.

-   Consecutive flat byte-like components of the type x, between which there are no alignment gaps, form byte-like fragments.

-   Consecutive, similar numeric components of type (b, s), i, int8, decfloat16, decfloat34, or f, between which there are no alignment gaps, each form a common fragment.

-   Consecutive time stamp fields of the type utclong, between which there are no alignment gaps, form a separate fragment.

-   Each individual numeric type p component forms a separate fragment. For this type of fragment, the length is important, but not the number of decimal places.

-   In [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") structures, each deep component (reference) forms a separate fragment.

-   Each component with an [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") forms a separate fragment of this type.

-   Each alignment gap is considered a fragment.

Hints

-   In nested structures, alignment gaps can occur before and after aligned substructures.

-   When structure components are transferred using [INCLUDE](javascript:call_link\('abapinclude_type.htm'\)), an additional alignment gap can be created in front of the included components.

-   The fragment view of structures with components of type p can match, even when the number of decimal places in the components concerned is different.

-   An [enumerated structure](javascript:call_link\('abenenumerated_structure_glosry.htm'\) "Glossary Entry") of an [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") is a special structure in which each component has an enumerated type and forms a separate fragment.

Example

DATA:
  BEGIN OF struc,
    a TYPE c LENGTH 3,
    b TYPE n LENGTH 4,
    c TYPE d,
    d TYPE t,
    e TYPE decfloat16,
    f TYPE x LENGTH 2,
    g TYPE x LENGTH 4,
    h TYPE i,
    i TYPE i,
    j TYPE i,
    k TYPE i,
  END OF struc.

The structure struc contains the following fragments for the character representation [UCS-2](javascript:call_link\('abenucs2_glosry.htm'\) "Glossary Entry") used by the ABAP programming language, in which character-like fields are represented by two bytes per character. Alignment gaps are marked with an A.

Fragment

Components

Bytes

1

a, b, c, d

6+8+16+12

2

A

6

3

e

8

4

f, g

2+4

5

A

2

6

h, i, j, k

4+4+4+4