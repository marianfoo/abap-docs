  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 7.5x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-75.htm) →  [News for ABAP Release 7.56](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-756.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20Access%20Control%20in%20ABAP%20Release%207.56%2C%20ABENNEWS-756-CDS_ACCESS_CONTROL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%
20for%20improvement:)

ABAP CDS Access Control in ABAP Release 7.56

[1\. Graceful Behavior in Access Condition Inheritance for Missing Dictionary Elements](#!ABAP_MODIFICATION_1@1@)
[2\. Unified Syntax for Authorization Objects, Authorization Fields and SACF Scenario Names](#!ABAP_MODIFICATION_2@2@)
[3\. Additional Filtering of User-Defined Aspect Usage](#!ABAP_MODIFICATION_3@3@)
[4\. Condition Replacement for Role-Based Inheritance](#!ABAP_MODIFICATION_4@4@)
[5\. Generic Element Replacement for Condition Inheritance](#!ABAP_MODIFICATION_5@5@)
[6\. Enabling/Disabling of Access Conditions Based on the State of SACF](#!ABAP_MODIFICATION_6@6@)
[7\. Access Conditions for CDS Hierarchies Based on Elements of the Hierarchy Directory](#!ABAP_MODIFICATION_7@7@)
[8\. Consideration of Special Runtime Modes](#!ABAP_MODIFICATION_8@8@)
[9\. New DCL Function](#!ABAP_MODIFICATION_9@9@)

Modification 1   

Graceful Behavior in Access Condition Inheritance for Missing Dictionary Elements

From this release on, authors of access controls can mark a subset of the CDS elements used in their access conditions as optional, so that CDS entities which inherit their access conditions are not affected by a Day-1-impact any more.

GRANT SELECT ON cds\_entity WITH OPTIONAL ELEMENTS (
     element1 DEFAULT (TRUE|FALSE), ...) WHERE ...

[More Information](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_dcl_role_cond_rule.htm)

Modification 2   

Unified Syntax for Authorization Objects, Authorization Fields and SACF Scenario Names

At all locations of access controls, references to authorization objects, authorization fields, and SACF scenario names can be written in identifier syntax when they comply with it and in string syntax with single apostrophes as an alternative.

Before:

( ... ) = ASPECT PFCG\_AUTH( S\_OBJ IN SCENARIO 'THESCENARIO' )

Now allowed:

( ... ) = ASPECT PFCG\_AUTH( S\_OBJ IN SCENARIO TheScenario )

[More Information](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_role.htm)

Modification 3   

Additional Filtering of User-Defined Aspect Usage

When using user-defined aspects, these can now denominate an arbitrary set of their elements (path expressions are supported) as filter element. These filter elements can by referenced when using the user-defined aspect in an access condition.

DEFINE ASPECT ... AS SELECT FROM ...
  WITH USER ELEMENT ...
  WITH FILTER ELEMENTS ( element1, element2 AS alias2 )
  {
      ...
  }
WHERE ( ... ) = ASPECT ... FILTER BY ( element1 = 'X' OR
                                       alias2 IS NOT NULL )

[More Information](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_cond_aspect.htm)

Modification 4   

Condition Replacement for Role-Based Inheritance

The REPLACING section formerly only available to entity-based inheritance

INHERITING CONDITIONS FROM ENTITY cds\_entity

is now also available for role-based inheritance

INHERIT role FOR GRANT SELECT ON cds\_entity

[More Information](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_cond_inherit.htm)

Modification 5   

Generic Element Replacement for Condition Inheritance

The REPLACING section of condition inheritance now supports a generic replacement step to replace an arbitrary field or association of the inheritance source with an arbitrary field or association of the inheritance target.

WHERE INHERITING CONDITIONS FROM ENTITY Source REPLACING {
  ELEMENT Element1OfSource WITH Element1OfTarget,
  ELEMENT Assoc1OfSource WITH Assoc1\[r = 4\].Assoc2OfTarget,
  ELEMENT Assoc2(p : $parameters.p1)\[ q = 1\].Field WITH MyShortField }

[More Information](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_cond_inherit_replacing.htm)

Modification 6   

Enabling/Disabling of Access Conditions Based on the State of SACF

Respecting settings in the switchable authorization framework (SACF) was already possible for dedicated PFCG conditions:

ASPECT PFCG\_AUTH ( S\_OBJECT IN SCENARIO ... )

Now, those settings can be used to enable or disable entire condition sets:

GRANT SELECT ON cds\_entity
  WHERE
    SACF\_CHECK\_IN\_USE (NAME => NEW\_AUTH\_SWITCH ) IS INITIAL
      AND
    ( element ) = ASPECT PFCG\_AUTH( OLD\_AUTH, F )
  OR
    SACF\_CHECK\_IN\_USE( NAME => NEW\_AUTH\_SWITCH ) IS NOT INITIAL
      AND
    ( element ) = ASPECT PFCG\_AUTH( NEW\_AUTH, F );

[More Information](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_function.htm)

Modification 7   

Access Conditions for CDS Hierarchies Based on Elements of the Hierarchy Directory

For CDS hierarchies, access control was restricted to the use of conditions not resulting in database filtering. Now elements located in the declared hierarchy directory

[DIRECTORY ... FILTER BY](abencds_f1_define_hierarchy.htm#!ABAP_ADDITION_4@4@)

can be used to formulate such conditions.

Modification 8   

Consideration of Special Runtime Modes

When operating the system with the emergency user SAP\*, CDS access control is now deactivated.

During processing of an update task, PFCG conditions are now considered as fully authorized.

[More Information](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenauthority_during_update.htm)

Modification 9   

New DCL Function

The following new [DCL function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_function.htm) is available: [OPTIONAL\_ELEMENT\_EXISTS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_dcl_function.htm).