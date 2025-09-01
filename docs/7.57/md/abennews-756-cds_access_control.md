  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.56](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-756.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS Access Control in Release 7.56, ABENNEWS-756-CDS_ACCESS_CONTROL, 757%0D%0A%0
D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP CDS Access Control in Release 7.56

[1\. Graceful Behavior in Access Condition Inheritance for Missing Dictionary Elements](#!ABAP_MODIFICATION_1@1@)
[2\. Quantifier Operators](#!ABAP_MODIFICATION_2@2@)
[3\. Unified Syntax for Authorization Objects, Authorization Fields and SACF Scenario Names](#!ABAP_MODIFICATION_3@3@)
[4\. Additional Filtering of Self-Defined Aspect Usage](#!ABAP_MODIFICATION_4@4@)
[5\. Condition Replacement for Role-Based Inheritance](#!ABAP_MODIFICATION_5@5@)
[6\. Generic Element Replacement for Condition Inheritance](#!ABAP_MODIFICATION_6@6@)
[7\. Enabling/Disabling of Access Conditions Based on the State of SACF](#!ABAP_MODIFICATION_7@7@)
[8\. Access Conditions for CDS Hierarchies Based on Elements of the Hierarchy Directory](#!ABAP_MODIFICATION_8@8@)
[9\. Consideration of Special Runtime Modes](#!ABAP_MODIFICATION_9@9@)

Modification 1   

Graceful Behavior in Access Condition Inheritance for Missing Dictionary Elements

From this release on, authors of access controls can mark a subset of the CDS elements used in their access conditions as optional, so that CDS entities which inherit their access conditions are not affected by a Day-1-impact any more.

GRANT SELECT ON cds\_entity WITH OPTIONAL ELEMENTS (
     element1 DEFAULT (TRUE|FALSE), ...) WHERE ...

[More Information](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_role_cond_rule.htm)

Modification 2   

Quantifier Operators

With the new addition ALL, access conditions can express that access shall only be granted when from a set-valued association all values satisfy the condition.

WHERE ALL toItem.State = 'A'

To accompany this use case, the BYPASS WHEN operator has been extended to literal conditions also.

A dedicated operator EXISTS can be used when different access conditions using the same set-valued association shall not be coupled in their fields by means of a common join expression.

[More Information](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_dcl_role_conditions.htm)

Modification 3   

Unified Syntax for Authorization Objects, Authorization Fields and SACF Scenario Names

At all locations of access controls, references to authorization objects, authorization fields, and SACF scenario names can be written in identifier syntax when they comply with it and in string syntax with single apostrophes as an alternative.

Before:

( ... ) = ASPECT PFCG\_AUTH( S\_OBJ IN SCENARIO 'THESCENARIO' )

Now allowed:

( ... ) = ASPECT PFCG\_AUTH( S\_OBJ IN SCENARIO TheScenario )

[More Information](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_role.htm)

Modification 4   

Additional Filtering of Self-Defined Aspect Usage

When using self-defined aspects, these can now denominate an arbitrary set of their elements (path expressions are supported) as filter element. These filter elements can by referenced when using the self-defined aspect in an access condition.

DEFINE ASPECT ... AS SELECT FROM ...
  WITH USER ELEMENT ...
  WITH FILTER ELEMENTS ( element1, element2 AS alias2 )
  {
      ...
  }
WHERE ( ... ) = ASPECT ... FILTER BY ( element1 = 'X' OR
                                       alias2 IS NOT NULL )

[More Information](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_cond_aspect.htm)

Modification 5   

Condition Replacement for Role-Based Inheritance

The REPLACING section formerly only available to entity-based inheritance

INHERITING CONDITIONS FROM ENTITY cds\_ntity

is now also available for role-based inheritance

INHERIT role FOR GRANT SELECT ON cds\_entity

[More Information](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_cond_inherit.htm)

Modification 6   

Generic Element Replacement for Condition Inheritance

The REPLACING section of condition inheritance now supports a generic replacement step to replace an arbitrary field or association of the inheritance source with an arbitrary field or association of the inheritance target.

WHERE INHERITING CONDITIONS FROM ENTITY Source REPLACING {
  ELEMENT Element1OfSource WITH Element1OfTarget,
  ELEMENT Assoc1OfSource WITH Assoc1\[r = 4\].Assoc2OfTarget,
  ELEMENT Assoc2(p : $parameters.p1)\[ q = 1\].Field WITH MyShortField }

[More Information](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_cond_inherit_replacing.htm)

Modification 7   

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

[More Information](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_dcl_function.htm)

Modification 8   

Access Conditions for CDS Hierarchies Based on Elements of the Hierarchy Directory

For CDS hierarchies, access control was restricted to the use of conditions not resulting in database filtering. Now elements located in the declared hierarchy directory

[DIRECTORY ... FILTER BY](abencds_f1_define_hierarchy.htm#!ABAP_ADDITION_4@4@)

can be used to formulate such conditions.

Modification 9   

Consideration of Special Runtime Modes

When operating the system with the emergency user SAP\*, CDS access control is now deactivated.

During processing of an update task, PFCG conditions are now considered as fully authorized.

[More Information](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenauthority_during_update.htm)