  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Processing Blocks](javascript:call_link\('abencall_processing_blocks.htm'\)) →  [Calling Procedures](javascript:call_link\('abencall_procedures.htm'\)) →  [PERFORM](javascript:call_link\('abapperform.htm'\)) → 

PERFORM - parameter\_list

[Quick Reference](javascript:call_link\('abapperform_shortref.htm'\))

Syntax

... *\[*TABLES   itab1 itab2 ...*\]*
    *\[*USING    a1 a2 ...*\]*
    *\[*CHANGING a1 a2 ...*\]*.

Extras:

[1\. ... TABLES itab1 itab2 ...](#!ABAP_ADDITION_1@1@)
[2\. ... USING a1 a2 ...](#!ABAP_ADDITION_2@2@)
[3\. ... CHANGING a1 a2 ...](#!ABAP_ADDITION_3@3@)

Effect

These additions assign actual parameters to the formal parameters of the parameter interface of the subroutine subr. All data objects whose data type matches the [typing](javascript:call_link\('abentyping_glosry.htm'\) "Glossary Entry") of the corresponding formal parameter can be specified (see [Check Typing](javascript:call_link\('abentyping_check.htm'\))) as actual parameters. Each formal parameter assumes all the properties of the actual parameter assigned to it when it is called. The order of the additions is fixed.

Note&

A [system field](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") should [never be used an actual parameter](javascript:call_link\('abenuse_actual_parameters_guidl.htm'\) "Guideline").

Addition 1

... TABLES itab1 itab2 ...

Effect

The addition TABLES must be used to assign an internal table itab as the actual parameter to each table parameter t1 t2 ... (of the called subroutine) defined using the addition TABLES of the statement [FORM](javascript:call_link\('abapform.htm'\)). The assignment of the actual parameters to the formal parameters takes place using their positions in the lists t1 t2 ... and itab1 itab2 ...

Only [standard tables](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") can be specified for itab. The data is passed using a reference. If a specified table itab has a [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry"), this is also passed. If not, the header line in the corresponding table parameter t is initial when it is called.

Note

The use of table parameters in the interface for subroutines is obsolete, but a large number of subroutines have not yet been switched to appropriately typed USING parameters or CHANGING parameters. This means that they must still be filled by the addition TABLES of the statement PERFORM.

Example

Static call of the internal subroutine select\_sflight while passing a table parameter.

PARAMETERS: p\_carr TYPE sflight-carrid,
            p\_conn TYPE sflight-connid.
DATA sflight\_tab TYPE STANDARD TABLE OF sflight.
...
PERFORM select\_sflight TABLES sflight\_tab
                       USING  p\_carr p\_conn.
...
FORM select\_sflight TABLES flight\_tab LIKE sflight\_tab
                    USING  f\_carr TYPE sflight-carrid
                           f\_conn TYPE sflight-connid.
  SELECT \*
         FROM sflight
         WHERE carrid = @f\_carr AND
               connid = @f\_conn
         INTO TABLE @flight\_tab.
ENDFORM.

Addition 2

... USING a1 a2 ...

Addition 3

... CHANGING a1 a2 ...

Effect

If the additions USING and CHANGING are specified, a type-friendly actual parameter a1 a2 ... must be assigned to each of the formal parameters u1 u2 ... and c1 c2 ... defined using the same additions of the statement [FORM](javascript:call_link\('abapform.htm'\)). Together, the actual parameters specified after USING and CHANGING are a single shared list. They are assigned to the formal parameters after the position in the shared list. The type of parameter passing is defined by the additions USING and CHANGING of the statement FORM. The addition USING must be in front of CHANGING. If not, the assignment of the actual parameters to the additions USING and CHANGING is ignored by the statement PERFORM. It is also irrelevant whether only one or both of the additions is specified.

Notes

-   For program documentation purposes, it is best to specify the additions USING and CHANGING in the statement FORM in accordance with the definition of the parameter interface.
    
-   No [substring access](javascript:call_link\('abenoffset_length.htm'\)) is possible after an actual parameter of type string or xstring specified after USING or CHANGING.
    
-   [Up casts](javascript:call_link\('abenup_cast_glosry.htm'\) "Glossary Entry") are not possible when passing an actual parameter to a USING parameter typed as a reference variable.
    
-   A USING parameter declared for [pass by reference](javascript:call_link\('abenpass_by_reference_glosry.htm'\) "Glossary Entry") behaves in the same way as a CHANGING parameter. This means, however, that the content of the actual parameter could be changed in an illegal way.
    
-   A USING parameter defined for [pass by value](javascript:call_link\('abenpass_by_value_glosry.htm'\) "Glossary Entry") should have a syntax, which behaves for the calling program like a parameter defined for pass by reference.
    

Example

The following five PERFORM statements mean the same but only the fourth is recommended, since it is the only one that documents the interface of the subroutine called.

DATA: a1 TYPE string,
      a2 TYPE string,
      a3 TYPE string,
      a4 TYPE string.
PERFORM test USING a1 a2 a3 a4.
PERFORM test CHANGING a1 a2 a3 a4.
PERFORM test USING a1 CHANGING a2 a3 a4.
PERFORM test USING a1 a2 CHANGING a3 a4.
PERFORM test USING a1 a2 a3 CHANGING a4.
...
FORM test USING p1 TYPE string
                p2 TYPE string
          CHANGING value(p3) TYPE string
                   value(p4) TYPE string.
  ...
ENDFORM.