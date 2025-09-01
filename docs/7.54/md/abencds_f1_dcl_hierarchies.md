  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Access Control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_authorizations.htm) →  [ABAP CDS - DCL Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_dcl_syntax.htm) → 

ABAP CDS - DCL Restrictions for ABAP CDS - Hierarchies

[CDS hierarchies](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_hierarchy_glosry.htm "Glossary Entry") can be protected using access control. It must be guaranteed, however, that individual rows are not filtered out if they are part of a logical block in the hierarchy construction. Otherwise the hierarchies constructed by the database could be destroyed and hierarchy operators produce undefined results.

For this reason, access controls only allow language elements in CDS hierarchies whose effects are not specific to rows. This means the following are allowed:

-   PFCG conditions without fields ( ( ) = ASPECT PFCG\_AUTH( ... ) )

-   Conditions under exclusive use of [left side host expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_dcl_cond_left_side.htm). This enables protection for a CDS hierarchy using the hierarchy directory specified by a parameter.

-   The special conditions TRUE, FALSE, and VOID. These should not, however, be used directly in CDS access controls.