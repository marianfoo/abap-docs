  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assigning References](javascript:call_link\('abenreference_assignments.htm'\)) →  [Setting Field Symbols](javascript:call_link\('abenset_field_symbols.htm'\)) →  [ASSIGN](javascript:call_link\('abapassign.htm'\)) → 

ASSIGN - range\_spec

[Quick Reference](javascript:call_link\('abapassign_shortref.htm'\))

Syntax

... *{* *}*
  *|* *{*RANGE range*}*.

Alternatives:

[1\. ... *{* *}*](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... RANGE range](#!ABAP_ALTERNATIVE_2@2@)

Effect

When specified, range\_spec defines the area limits within which a memory area can be assigned to the field symbol. Either nothing can be specified here or the addition RANGE.

At the same time, the statement ASSIGN assigns these area limits to the field symbol <fs>. If the field symbol <fs> is itself used in a subsequent ASSIGN statement to specify a memory area [mem\_area](javascript:call_link\('abapassign_mem_area.htm'\)), the assigned memory areas are used for determining the area limits of the field symbol that is being assigned.

Note

The area limits assigned to a field symbol using range\_spec only apply to the following ASSIGN statements. In other statements, with the exception of [ADD UNTIL](javascript:call_link\('abapadd_sequences.htm'\)), the [general rules](javascript:call_link\('abenoperands_data_objects.htm'\)) apply.

Alternative 1

... *{* *}*

Effect

If no value is specified for range\_spec, the area limits are defined as follows:

-   If an elementary data object was specified for dobj in [mem\_area](javascript:call_link\('abapassign_mem_area_static_dobj.htm'\)), the memory area of this data object determines the area limits.
    
-   If a field symbol was specified for dobj in [mem\_area](javascript:call_link\('abapassign_mem_area_static_dobj.htm'\)), and this field symbol has an elementary data object assigned to it, the field symbol <fs> of the current statement takes on the area limits assigned to this field symbol.
    
-   If a structure or a field symbol was specified for dobj in [mem\_area](javascript:call_link\('abapassign_mem_area_static_dobj.htm'\)), and one of these points to a structure, the system checks whether the structure has a character-like initial part (up to the first [alignment gap](javascript:call_link\('abenalignment_gap_glosry.htm'\) "Glossary Entry")). This then determines the area limits.
    

If these area limits are exceeded, no memory area is assigned for the static variant of mem\_area after the ASSIGN statement. Also, the [predicate expression](javascript:call_link\('abenpredicate_expression_glosry.htm'\) "Glossary Entry") [<fs> IS ASSIGNED](javascript:call_link\('abenlogexp_assigned.htm'\)) is incorrect, while sy-subrc is set to 4 in the dynamic variant.

Example

In the first ASSIGN statement, the area limits of the data object text are assigned to <fs1>. In the second ASSIGN statement, <fs2> takes on these limits. From the sixth pass, an attempt is made to assign a larger memory area to <fs2>, which makes the logical expression after IF false.

DATA text TYPE c LENGTH 8 VALUE '12345678'.
FIELD-SYMBOLS: <fs1> TYPE ANY,
               <fs2> TYPE ANY.
ASSIGN text+3(3) TO <fs1>.
DO 8 TIMES.
  ASSIGN <fs1>(sy-index) TO <fs2>.
  IF <fs2> IS ASSIGNED.
    cl\_demo\_output=>write\_text( |{ <fs2> }| ).
  ENDIF.
ENDDO.
cl\_demo\_output=>display( ).

Alternative 2

... RANGE range

Effect

If the addition RANGE is specified in range\_spec, the area limits are defined by the [data area](javascript:call_link\('abendata_area_glosry.htm'\) "Glossary Entry") of a range data object. range expects a data object of any data type. This object must cover the area limits when the RANGE addition is not specified (see above). If it is established at runtime that range does not cover these area limits, a non-handleable exception is raised.

When the RANGE addition is used, only subareas of the range data object can be assigned to the field symbol. If these area limits are exceeded, no memory area is assigned for the static variant of [mem\_area](javascript:call_link\('abapassign_mem_area.htm'\)) after the ASSIGN statement. Also, the [predicate expression](javascript:call_link\('abenpredicate_expression_glosry.htm'\) "Glossary Entry") [<fs> IS ASSIGNED](javascript:call_link\('abenlogexp_assigned.htm'\)) is incorrect, while sy-subrc is set to 4 in the dynamic variant.

The addition RANGE cannot be used with the addition [CASTING TYPE HANDLE](javascript:call_link\('abapassign_casting.htm'\)) or for assigning [table expressions](javascript:call_link\('abapassign_mem_area_writable_exp.htm'\)).

Notes

-   A RANGE addition does not remove the type-specific rules for [substring accesses](javascript:call_link\('abenoffset_length.htm'\)). To enable substring access beyond the field limits of a specified data object dobj, substring access must be possible in principle. In particular, substring access is never possible beyond the limits of a structure, since the character-like initial part is not accessed in this case.
    
-   If a structure is specified for range that contains [dynamic data objects](javascript:call_link\('abendynamic_data_object_glosry.htm'\) "Glossary Entry"), they only contribute the internal reference to the data area of the structure. The actual data area of the dynamic data objects is paged out and is ignored by RANGE. This also applies to substructures that are declared as [boxed components](javascript:call_link\('abenboxed_component_glosry.htm'\) "Glossary Entry").
    

Example

The struc structure is constructed from ten components col1\_1, col2\_1, ..., col1\_5, col2\_5. The ASSIGN statement assigns the memory area of two neighboring components to the structure-typed field symbol <sub>, one after the other. Here the memory area is determined by the common name of the first two components comp1 in the structure struc and the specification of INCREMENT. Without the RANGE addition, the WHILE loop would only execute once since it would only be possible to access the memory area of struc-comp1. The RANGE addition causes the loop to be passed five times. The components of the field symbol can be accessed after the assignment.

TYPES: BEGIN OF sub\_struc,
          col1 TYPE c LENGTH 10,
          col2 TYPE c LENGTH 10,
       END OF sub\_struc.
DATA BEGIN OF struc.
INCLUDE TYPE: sub\_struc AS comp1 RENAMING WITH SUFFIX \_1,
              sub\_struc AS comp2 RENAMING WITH SUFFIX \_2,
              sub\_struc AS comp3 RENAMING WITH SUFFIX \_3,
              sub\_struc AS comp4 RENAMING WITH SUFFIX \_4,
              sub\_struc AS comp5 RENAMING WITH SUFFIX \_5.
DATA END OF struc.
FIELD-SYMBOLS <sub> TYPE sub\_struc.
struc = VALUE #( col1\_1 = 'col1\_1'  col2\_1 = 'col2\_1'
                 col1\_2 = 'col1\_2'  col2\_2 = 'col2\_2'
                 col1\_3 = 'col1\_3'  col2\_3 = 'col2\_3'
                 col1\_4 = 'col1\_4'  col2\_4 = 'col2\_4'
                 col1\_5 = 'col1\_5'  col2\_5 = 'col2\_5' ).
DATA inc TYPE i.
WHILE sy-subrc = 0.
  inc = sy-index  - 1.
  ASSIGN struc-comp1 INCREMENT inc TO <sub> CASTING
                                            RANGE struc.
  IF sy-subrc = 0.
    cl\_demo\_output=>write\_data( <sub> ).
  ENDIF.
ENDWHILE.
cl\_demo\_output=>display( ).