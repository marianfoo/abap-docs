  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Access Control](javascript:call_link\('abencds_authorizations.htm'\)) →  [ABAP CDS - DCL Statements](javascript:call_link\('abencds_f1_dcl_syntax.htm'\)) →  [ABAP CDS - DEFINE ROLE](javascript:call_link\('abencds_f1_define_role.htm'\)) →  [ABAP CDS - DEFINE ROLE, condition](javascript:call_link\('abencds_dcl_role_conditions.htm'\)) →  [ABAP CDS - DEFINE ROLE, pfcg\_condition](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) → 

ABAP CDS - DEFINE ROLE, pfcg\_mapping

Syntax

... ( ... { element1*\[*, element2 ...*\]* } ... )
        =|?= ASPECT pfcg\_auth
               ( ... PFCG\_MAPPING = pfcg\_mapping ...  ) ...

Effect

Associates an element list specified in curly brackets { element1*\[*, element2 ...*\]* } with a [PFCG mapping](javascript:call_link\('abencds_pfcg_mapping_glosry.htm'\) "Glossary Entry") pfcg\_mapping in the definition of a [PFCG condition](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)).

-   The element list of the left side is a comma-separated list of one or more directly specified [CDS elements](javascript:call_link\('abencds_element_glosry.htm'\) "Glossary Entry") of the CDS entity for which the access condition is defined. An element element cannot be specified here using a path expression [path\_expr](javascript:call_link\('abencds_f1_path_expression.htm'\)) and must have one of the valid [data types](javascript:call_link\('abencds_f1_dcl_cond_data_types.htm'\)).

-   After PFCG\_MAPPING =, the right side must specify a PFCG mapping pfcg\_mapping defined using [DEFINE PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)) as part of a [CDS access policy](javascript:call_link\('abencds_access_policy_glosry.htm'\) "Glossary Entry").

Currently, there can be only one association of this type in a single PFCG condition. When the PFCG condition is transformed into specific conditions, the mapping is handled as follows by CDS access control:

-   The authorization fields specified in the comma-separated list of the definition of the [PFCG mapping](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)) are used as input fields of the PFCG mapping value definition pfcg\_mapping\_value\_definition.

-   The output fields of the [PFCG mapping](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)) are compared with the CDS elements of the element list associated with the PFCG mapping in the PFCG condition.

The other conditions of the [PFCG condition](javascript:call_link\('abencds_f1_cond_pfcg.htm'\)) are created as described here. The PFCG condition is true if the conditions for the individually specified CDS elements and the PFCG mapping are met. If multiple authorizations exist for a single authorization field and there are individually specified CDS elements alongside the PFCG mapping, the PFCG mapping is resolved for each individual authorization.

Notes

-   PFCG mappings enable those entries in a CDS entity allowed for a particular user to be edited using high-order structural characteristics.

-   Using PFCG mappings can negatively affect performance, particularly if individual CDS elements are specified simultaneously and if multiple authorizations exist for a single authorization field.

Example

The following abstract example uses the PFCG mapping mapping defined in the example for [DEFINE PFCG\_MAPPING](javascript:call_link\('abencds_f1_define_pfcg_mapping.htm'\)) in a [PFCG condition](javascript:call_link\('abenpfcg_condition_glosry.htm'\) "Glossary Entry").

... GRANT SELECT ON entity WHERE
      ( a,
       { b } )
          = ASPECT PFCG\_AUTH( auth\_object,
                              f1,
                              PFCG\_MAPPING = mapping );

The current user has two authorizations for the authorization object auth\_object:

-   One authorization with the value "A" for the authorization field f1, the value "B" for the authorization field f2, and the value "C" for the authorization field f3

-   One authorization with the value "X" for the authorization field f1, the value "Y" for the authorization field f2, and the value "Z" for the authorization field f3

The resulting access condition is as follows when expressed in SQL:

... SELECT ... FROM entity AS e ...
      WHERE
          e.a = 'A'
            AND
              EXISTS (
                 SELECT \* FROM mapping\_value\_definition AS m
                   WHERE
                     m.in\_1 = 'B' AND
                     m.in\_2 = 'C' AND
                     m.out  = e.b )
        OR
          e.a = 'X'
            AND
              EXISTS (
                 SELECT \* FROM mapping\_value\_definition AS m
                   WHERE
                     m.in\_1 = 'Y' AND
                     m.in\_2 = 'Z' AND
                     m.out  = e.b )

The two authorizations are evaluated in two conditions joined using OR. Here, AND is used to join the check on the individually specified CDS element a with an access performed on the PFCG mapping value definition mapping\_value\_definition used in the PFCG mapping. The values from the authorization object "B", "C", and "Y", "Z" are specified as input values of the mapping and its output value is bound to the CDS element b specified in the PFCG condition.

The role in the PFCG mapping used in the PFCG mapping field definition mapping\_field\_definition is not visible here.