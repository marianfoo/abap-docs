  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_access_control.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_syntax.htm) →  [CDS DCL - DEFINE ROLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_role.htm) →  [CDS DCL - DEFINE ROLE, condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_conditions.htm) →  [CDS DCL - DEFINE ROLE, inherit\_condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_cond_inherit.htm) →  [CDS DCL - DEFINE ROLE, replacing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_cond_inherit_replacing.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DCL%20-%20DEFINE%20ROLE%2C%20replacement_step%2C%20ABENCDS_F1_COND_INHERIT_RPL_STEP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%
20improvement:)

CDS DCL - DEFINE ROLE, replacement\_step

Syntax

... *{* PFCG\_FILTER *\[* OBJECT auth\_object *\]* FIELD auth\_field VALUE  old WITH new *}*
  *|* *{* PARAMETERS WITH ( param1 : value1 *\[*, param2 : value2 ...*\]*  ) *}*
  *|* *{* ROOT WITH path\_expr *\[*INCLUDING PARAMETERS *\]* *}*
  *|* *{* ELEMENT source\_match WITH target *}*
  *|* *{* PREFIX WITH prefix *}*
  *|* *{* CONDITIONS ON ANY OF ( element1 *\[*, element2 ... *\]* ) WITH (TRUE*|*FALSE *|*VOID ) *}*
  *|* *{* IF ALL CONDITIONS VOID THEN (TRUE*|*FALSE*|*VOID) *}* ...

Variants:

[1\. ... PFCG\_FILTER *\[*OBJECT auth\_object*\]* FIELD auth\_field VALUE old WITH new](#!ABAP_VARIANT_1@1@)
[2\. ... PARAMETERS WITH ( param1 : value1 *\[*, param2 : value2 ...*\]* )](#!ABAP_VARIANT_2@2@)
[3\. ... ROOT WITH path\_expr *\[*INCLUDING PARAMETERS *\]*](#!ABAP_VARIANT_3@3@)
[4\. ... ELEMENT source\_match WITH target](#!ABAP_VARIANT_4@4@)
[5\. ... PREFIX WITH prefix](#!ABAP_VARIANT_5@5@)
[6\. ... CONDITIONS ON ANY OF (element1 *\[*, element2 ...*\]*) WITH (TRUE *|*FALSE *|*VOID)](#!ABAP_VARIANT_6@6@)
[7\. ... IF ALL CONDITIONS VOID THEN (TRUE *|*FALSE *|*VOID)](#!ABAP_VARIANT_7@7@)

Effect

A replacement step operates on a set of inherited [access conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenaccess_condition_glosry.htm "Glossary Entry") and can update or replace them.

Variant 1   

... PFCG\_FILTER \[OBJECT auth\_object\] FIELD auth\_field VALUE old WITH new

Addition:

[... OBJECT auth\_object](#!ABAP_ONE_ADD@1@)

Effect

This replacement step processes the literal values which are mapped to authorization fields in PFCG conditions.

auth\_field selects the authorization field. Occurrences of the value old are then replaced with the value new. Both values must be written as literals in single quotes.

Addition   

... OBJECT auth\_object

Effect

With this addition, the replacement process can be restricted to the authorization object auth\_object.

Hints

-   Specifying nonexistent authorization objects or authorization fields produces a syntax error.
-   The values in old and new may be validated against a set of fixed value if the authorization field has such (for example ACTVT). Non-existing values produce a warning.
-   To swap values, three replacements must be made. First, the first value is set to a temporary helper value that must be different from the existing values. This helper value must be replaced again after the second value is replaced. The helper value can have no more than 40 characters.
-   This step raises a warning when it was reached by at least one PFCG filter with matching field name (and, if given, authorization object), but none of them had a matching filter value.

Example

Replacement based on authorization field name independent of authorization object.

Input:

(...) = ASPECT PFCG\_AUTH( OBJECT\_1, ..., ACTVT = '03' )  OR
(...) = ASPECT PFCG\_AUTH( OBJECT\_2, ..., ACTVT = '03' )

Replacement step:

PFCG\_FILTER FIELD ACTVT VALUE '03' WITH 'F4'

Output:

(...) = ASPECT PFCG\_AUTH( OBJECT\_1, ..., ACTVT = 'F4' ) OR
(...) = ASPECT PFCG\_AUTH( OBJECT\_2, ..., ACTVT = 'F4' )

Example

Replacement of authorization field in a dedicated authorization object only.

Input:

(...) = ASPECT PFCG\_AUTH( OBJECT\_1, ..., ACTVT = '03' ) OR
(...) = ASPECT PFCG\_AUTH( OBJECT\_2, ..., ACTVT = '03' )

Replacement step:

PFCG\_FILTER OBJECT OBJECT\_1 FIELD ACTVT VALUE '03' WITH 'F4'

Output:

(...) = ASPECT PFCG\_AUTH( OBJECT\_1, ..., ACTVT = 'F4' ) OR
(...) = ASPECT PFCG\_AUTH( OBJECT\_2, ..., ACTVT = '03' )

Example

Exchange of two authorization field values using a temporary helper value.

Input:

(...) = ASPECT PFCG\_AUTH( OBJECT\_1, ..., ACTVT = '01' ) OR
(...) = ASPECT PFCG\_AUTH( OBJECT\_2, ..., ACTVT = '02' )

Replacement step:

PFCG\_FILTER FIELD ACTVT VALUE '02'   WITH 'TEMP',
PFCG\_FILTER FIELD ACTVT VALUE '01'   WITH '02',
PFCG\_FILTER FIELD ACTVT VALUE 'TEMP' WITH '01'

Output:

(...) = ASPECT PFCG\_AUTH( OBJECT\_1, ..., ACTVT = '02' ) OR
(...) = ASPECT PFCG\_AUTH( OBJECT\_2, ..., ACTVT = '01' )

Variant 2   

... PARAMETERS WITH ( param1 : value1 *\[*, param2 : value2 ...*\]* )

Effect

References to CDS parameters ($parameters param...) used in the inherited access conditions (either within path filters of left side elements or as left side host expressions) are replaced by new parameter values value.

For value you can insert:

-   Literals
-   Session variables ($SESSION...)
-   Parameter references of the target entity.

Hints

-   When you replace a parameter reference of the source with a parameter reference of the target entity, successive steps in the same REPLACING section will not touch this parameter any further.
-   When you have multiple parameters to replace, you can so in individual steps, or within a single step as comma separated list (or in any mixture of both).
-   This step raises a warning when it has been reached by at least one parameter reference, but none of them could be updated by it. When you have specified multiple replacements in a single step, the applicability of one of them already suppresses this warning.

Example

Replacement of the parameters P1 and P2 or the source entity with a parameter of the target entity and a literal.

Input:

toX ( F = $PARAMETERS.P1 OR G = $PARAMETERS.P2 )

Replacement step:

PARAMETERS WITH ( P1 : $PARAMETERS.P2, P2 : 'U' )

Output:
toX ( F = $PARAMETERS.P2 OR G = 'U' )

The same result would have been created with two separate steps:

PARAMETERS WITH ( P1 : $PARAMETERS.P2 ),
PARAMETERS WITH ( P2 : 'U' )

Variant 3   

... ROOT WITH path\_expr \[INCLUDING PARAMETERS\]

Addition:

[...INCLUDING PARAMETERS](#!ABAP_ONE_ADD@2@)

Effect

This replacement step processes left side CDS elements and relocates them into the provided association path\_expr.

The path expression can have one or more levels and can be specified in the same way as in the CDS entity.

The entity of the last path component must be the source entity of the inheritance condition.

Hints

-   Left side CDS elements that were produced by a preceding replacement step (ROOT WITH, ELEMENT WITH, PREFIX WITH) are not updated.
-   When the last path component points to a view with parameters, those can be specified in a parameter binding. For all non-optional parameter this is mandatory
-   A path expression prefix makes it possible to protect a CDS entity with the access rules of the association target of one of its CDS association.
-   This step emits a warning when it is reached by at least one left side element but updated none.
-   The optionality property of the inbound CDS element is lost during this replacement step because the formerly optional element is after this replacement step no longer the first component of the resulting path expression. However, you can declare optionality for the first component of path\_expr.
-   An incoming condition using DCL function OPTIONAL\_ELEMENT\_EXIST is replaced depending on the comparison operator:
    -   OPTIONAL\_ELEMENT\_EXISTS( ... ) IS INITIAL --> FALSE
    -   OPTIONAL\_ELEMENT\_EXISTS( ... ) IS NOT INITIAL --> TRUE

Addition   

...INCLUDING PARAMETERS

Effect

When the entity of the last association component of path\_expr has parameters and some of them are specified as part of the ROOT WITH statement, this parameter binding is used to perform parameter replacement in the condition set.

Hints

-   This statement is a short form of the sequence ROOT WITH with a parameter binding for the last component and PARAMETER WITH with the same parameter binding.
-   In contrast to the explicit form, the short form does not produce a warning when there are no parameters that can be replaced.

Example

You have a base entity S (for example a released SAP entity) and create a custom entity C using S as datasource.

DEFINE VIEW ENTITY C
  AS SELECT FROM S
  ASSOCIATION \[1..1\] TO S AS toS ON ...
  { ... }

Using the association toS, access control of S can now be taken over to C:

GRANT SELECT ON C WHERE INHERITING CONDITIONS FROM ENTITY S
   REPLACING { ROOT WITH toS };

An access condition of S like

state = 'X'

will then be executed for C as

toS.state = 'X'

Example

In the example above, S has a parameter DEMO and the access condition is

toState\[ f = $parameters.DEMO \].value = 'A'

In entity C, this parameter is supplied with a fixed value 'P'

DEFINE VIEW ENTITY C AS SELECT FROM S( DEMO : 'P' ) ...

In the access control, the usage of the unchanged toS allows and eventually even requires the parameter to be supplied.

GRANT SELECT ON C WHERE INHERITING CONDITIONS FROM ENTITY S
  REPLACING { ROOT WITH toS( DEMO : 'P' ) };

This would result in the access condition

toS.toState\[ f = $parameters.DEMO \].value = 'X'

This still requires that also C has the parameter DEMO.

By adding INCLUDING PARAMETERS

GRANT SELECT ON C WHERE INHERITING CONDITIONS FROM ENTITY S
  REPLACING { ROOT WITH toS( DEMO : 'P' ) INCLUDING PARAMETERS };

you apply a parameter replacement and the result is

  toS.toState\[ f = 'P' \].value = 'X'

Variant 4   

...ELEMENT source\_match WITH target

Effect

This replacement step searches for left side CDS elements matching the given source\_match and replaces them by the given target.

Both source\_match and target must together belong to one of the following categories:

-   A plain entity field or a path expression ending with a field.
    
    In this flavor, the statement replaces dedicated left side CDS elements.
    
-   An association with an arbitrary number of path components.
    
    In this flavor, the statement allows renaming of associations, while preserving all parts after the matching source components.
    
    Parameter bindings or path filters of the last source match component can either by specified in the source match and by this get consumed or can remain unmentioned in the source match in which case they are taken over to the resulting element.
    
    The provided target may contain parameter bindings or path filters at all locations.
    

The source matching process has the following properties:

-   The components of the source match must be fully present in the incoming element.
-   Parameter bindings and path filters for all but the last path component must be present/absent identically, and when present must be literally the same, that is except case insensitivity for identifiers there is no further normalization. For example the path filter a = 1 and b = 1 will not match the path filter b = 1 and a = 1.

Hints

-   Left side CDS elements that were produced by a preceding replacement step (ROOT WITH, ELEMENT WITH, PREFIX WITH) are never matched.
-   This step emits a warning when it matched with no left side element, irrespective of whether the inherited condition set contains left side elements at all.
-   When a processed left side element contains parameter bindings or path filters and is matched by a source match which does not consume either of them, and the target also provides an object of the same type, an error occurs.
-   The optionality property of the inbound CDS element is lost during this replacement step because the formerly optional element is replaced by this step by a new target element explicitly declared in the current access control. However, you can declare optionality for the first component of target.
-   Due to the treatment of optionality, a statement ELEMENT X WITH X may have an effect:
    -   When the inbound element was optional, the outbound element X is no longer optional (unless you make it optional itself in the current access control).
    -   When the inbound element is not optional, this statement allows it to make the output element optional by a declaration in the current access control (remember that WITH OPTIONAL ELEMENTS only operates on left side CDS elements written in the current access control).
-   An incoming condition using DCL function OPTIONAL\_ELEMENT\_EXISTS is replaced depending on the comparison operator:
    -   OPTIONAL\_ELEMENT\_EXISTS( ... ) IS INITIAL --> FALSE
    -   OPTIONAL\_ELEMENT\_EXISTS( ... ) IS NOT INITIAL --> TRUE

Example

Instead of full examples for each possible case, the following table shows in compact form various combinations of source match and target in the ELEMENT WITH operator and how they operate on incoming left side elements.

source\_match

Input Left Side Element

Match

target

Output Left Side Element

Explanation

A

A

Yes

B

B

Simple entity field

A

B

No

 

 

Must match exactly.

A

toB

Error

 

 

You cannot replace a field with an association.

A

toB.A

No

 

 

Match must be complete. That the left-side ends with a field named A is different from a field named A.

A

A

Yes

toB.C

toB.C

You can replace a field with a path expression.

A

A

Yes

toB (p:'x' ).toC *\[*i=3 *\]*.toD(q:'Y') *\[*j=5*\]*.E

toB (p:'X').toC *\[*i=3*\]*.toD(q:'Y') *\[*j=5*\]*.E

Parameters and filters are supported in the target.

A

A

Yes

A

A

At first, this looks like a NOOP, but it isn't. It has a meaning when optional elements are involved.
With this replacing, the author of the DCL source containing the ELEMENT A WITH A explicitly declares that he/she knows that the inherited entity containes element A (otherwise, the own DCL source would be syntactically incorrect already here). Optionality for A from the inherited source is therefore removed, as from that point on, the existence of A is certain.
Similarly, when the inherited source contains A and the author of the current DCL source wants to have A optional from this point on, this statement is the only way to let the own WITH OPTIONAL ELEMENTS (A DEFAULT ...) become applicable to the inherited A.

toA.B

toA.B

Yes

?

?

You can match path expressions and replace them as above with anything you like (? can be field or path expression, the latter with parameters and filters, see above).

toA.B

toA.C

No

 

 

Match must be complete.

toA.B

toB.B

No

 

 

Match must be complete.

toA.B

toC

Error

 

 

You cannot replace a (terminated) path expression with an (open) association.

toA(p:'X').toB\[i=3\].C,

toA(p:'X').toB\[i=3\].C

Yes

?

?

Source matcher can have parameter bindings and filters

toA(p:'X').toB\[i=3\].C

toA(p:'Y').toB\[i=3\].C

No

 

 

Parameter bindings must be literally the same (name-case and technical whitespace ignored, but count, order and values are relevant).

toA(p:'X').toB\[i=3\].C

toA(p:'X').toB\[3=i\].C

No

 

 

Filters are not semantically normalized.

toA

toA.B

Yes

toX

toX.B

Replacement of an (open) association with another one in the target entity. The trailing part after the match is taken over after the target fragment.

toA.toB

toA.toB.toC.toD.E

Yes

toX.toY

toX.toY.toC.toD.E

The same with longer chains.

toA\[i=3\]

toA\[i=3\].B

Yes

toX

toX.B

The filter from the left-side has been consumed by the source matcher (this and the following examples use a path filter for demonstration, with parameter bindings the same would happen, and when parameter bindings and filters come together, both operate independently from each other).

toA\[i=3\]

toA\[i=3\].B

Yes

toX\[i=4\]

toX\[i=4\].B

The target fragment can supply the resulting left-side with its own path filter.

toA\[i=3\]

toA\[i=4\].B

No

 

 

When filters are present in the source matcher, they must match.

toA

toA\[i=3\].B

Yes

toX

toX\[i=3\].B

The filter has not been consumed by the matcher and is therefore taken over from the left-side and attached to the target fragment.

toA

toA\[i=3\].B

Yes

toX\[i=3\]

Error

As the filter from the left side has not been consumed, it must be taken over to the target fragment. But this one already has a filter. This potential conflict is not permissive (even when both are literally the same).

Variant 5   

PREFIX WITH prefix

This replacement step is not released for usage in customer created access controls but only internally at SAP.

Effect

This replacement step processes left side CDS elements and changes the name of the first component such that it starts with the provided prefix.

When the concatenation of prefix and component name exceeds the maximum component name length of 30 characters, a name compression algorithm will shorten the component name accordingly in a way that ensures name uniqueness but preserves some readability.

The prefix can contain the ampersand character & at a single location. Then, this location of the resulting component name will contain an upwards counting number which is used when the same component name is handled with this replacement step again.

Hints

-   Left side CDS elements that were produced by a preceding replacement step (ROOT WITH, ELEMENT WITH, PREFIX WITH) are not updated.
-   This step emits a warning when it is reached by at least one left side element but updated none.
-   Optionality of the inbound left side CDS element is preserved by this step.
-   DCL function OPTIONAL\_ELEMENT\_EXISTS is preserved with the updated element name.

Example

The following table demonstrates the effects of the statement.

Input element

Prefix

Output element

Comment

A

P\_

P\_A

toB.C

P\_

P\_toB.C

ALREADY\_LONG\_ELEMENT\_NAME

LONGPF

LONGPFALREAD\_F3BD3673\_ENT\_NAME

The exact syntax of the shortening may look different, this shall only provide the idea. The algorithm of the shortening is not published and only available internally at SAP as API for the components eligible to use this feature.

A

SAP\_&\_

SAP\_1\_A

Initial prefix for view stacks.

SAP\_1\_A

SAP\_&\_

SAP\_2\_A

Follow-up prefix for view stacks.

Variant 6   

... CONDITIONS ON ANY OF (element1\[, element2 ...\]) WITH (TRUE|FALSE| VOID)

Effect

This replacement step replaces an entire access condition with one of the given operators TRUE, FALSE or VOID, when any of its left side elements matches one of the given elements element1, element2, ... .

The match elements can be either fields or path expressions, also open associations are supported.

Parameter bindings and path filters must not be specified, as a match element only considers the component names and matches incoming path expressions irrespectively of whether they contain parameter bindings or path filters.

Hints

-   Left side CDS elements that were produced by a preceding replacement step (ROOT WITH, ELEMENT WITH, PREFIX WITH) are not updated.
-   The usage of an element list is a short form or multiple CONDITIONS ON ANY OF statements for the individual elements.
-   The step generates a warning when it could not match any of the given elements with an incoming left side element.
-   When using this statement with the replacement option VOID, later changes in the inherited condition set may let the own access control become syntactically invalid when all conditions get replaced by VOID. To protect against this situation, you can use step IF ALL CONDITIONS VOID THEN as guard.
-   All elements of the element list must exist in the inheriting CDS entity. This statement is therefore not suitable to suppress nonexistent CDS elements in the future.

Example

The inherited condition

( toA\[F = 1\].B, C ) = ASPECT PFCG\_AUTH( ... )

will be replaced by TRUE with any of the following steps:

-   CONDITIONS ON ANY OF ( toA ) WITH TRUE
-   CONDITIONS ON ANY OF ( toA.B ) WITH TRUE
-   CONDITIONS ON ANY OF ( C ) WITH TRUE

Variant 7   

IF ALL CONDITIONS VOID THEN (TRUE|FALSE|VOID)

Effect

This step analyzes the current state of the condition set in the inheritance/replacement procedure. When it comprises only the VOID operator, the entire condition set is replaced by the given replacement value

Hints

-   This step is intended as a guard step when using CONDITIONS ON ANY OF ... WITH VOID.
-   The possibility to replace the condition set in this situation again with VOID exists for symmetry only, it is not sensible to do so.
-   This step does not generate a warning when it is not used. A good firefighter does not complain when there is no work to do.