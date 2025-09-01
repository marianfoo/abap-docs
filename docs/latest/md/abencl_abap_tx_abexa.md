  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [Data Consistency](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_consistency.htm) →  [SAP LUW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensap_luw.htm) →  [Controlled SAP LUW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencontrolling_sap_luw.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CL_ABAP_TX%20and%20API%20Classifications%2C%20ABENCL_ABAP_TX_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CL\_ABAP\_TX and API Classifications

This example demonstrates the explicit setting of transactional phases using the MODIFY and SAVE methods of the class CL\_ABAP\_TX. It includes multiple showcase implementations after setting the transactional phase. In some cases, the implementations deliberately violate the transactional contract to demonstrate what is allowed and what not. Furthermore, the implementations include method calls. The methods are tagged with IF\_ABAP\_TX\*.

Note: The example can only be executed if the checkpoint group CC\_STMT is not active.

Source Code   

\* Public class definition
CLASS cl\_demo\_cl\_abap\_tx DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    DATA input TYPE i.
  PRIVATE SECTION.
    METHODS get\_html RETURNING VALUE(html) TYPE string.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_cl\_abap\_tx IMPLEMENTATION.
  METHOD main.
    cl\_demo\_input=>new(
       )->add\_text( get\_html( )
       )->add\_field( EXPORTING
                       text  = \`Number\`
                     CHANGING
                       field = input
       )->request( ).
    IF input > 7.
      DATA(oref) = NEW cl\_demo\_classified\_apis(  ).
    ENDIF.
    CASE input.
      WHEN 1.
        cl\_abap\_tx=>modify( ).
        MODIFY ENTITY demo\_managed\_root
         CREATE AUTO FILL CID
         FIELDS ( key\_field data\_field1\_root data\_field2\_root )
         WITH VALUE #(
            ( key\_field = 1
              data\_field1\_root = \`abc\`
              data\_field2\_root = \`def\` ) )
         MAPPED DATA(m)
         FAILED DATA(f)
         REPORTED DATA(r).
        out->write( \`RAP create operation in MODIFY phase: Ok!\` ).
      WHEN 2.
        cl\_abap\_tx=>modify( ).
        DELETE FROM demo\_tab\_root.                      "#EC CI\_NOWHERE
        out->write( \`Database modification operation in MODIFY \` &&
        \`phase: Violation!\` ).
      WHEN 3.
        cl\_abap\_tx=>modify( ).
        COMMIT WORK.
        out->write( \`Commit in MODIFY phase: Violation!\` ).
      WHEN 4.
        cl\_abap\_tx=>save( ).
        DELETE FROM demo\_tab\_root.                      "#EC CI\_NOWHERE
        out->write( \`Database modification operation in SAVE \` &&
        \`phase: Ok!\` ).
      WHEN 5.
        cl\_abap\_tx=>save( ).
        COMMIT WORK.
        out->write( \`Commit in (late) SAVE phase: Ok!\` ).
      WHEN 6.
        cl\_abap\_tx=>save( ).
        MODIFY ENTITY demo\_managed\_root
         CREATE AUTO FILL CID
         FIELDS ( key\_field data\_field1\_root data\_field2\_root )
         WITH VALUE #(
            ( key\_field = 1
              data\_field1\_root = \`abc\`
              data\_field2\_root = \`def\` ) )
         MAPPED m
         FAILED f
         REPORTED r.
        out->write( \`RAP create operation in SAVE phase: Violation!\` ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\* Classified APIs \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
        "if\_abap\_tx\_complete
      WHEN 7.
        cl\_abap\_tx=>modify( ).
        oref->meth\_complete( ).
        out->write( \`Calling API classified with \` &&
        \`IF\_ABAP\_TX\_COMPLETE in MODIFY phase: Violation!\` ).
      WHEN 8.
        cl\_abap\_tx=>save( ).
        oref->meth\_complete( ).
        out->write( \`Calling API classified with \` &&
        \`IF\_ABAP\_TX\_COMPLETE in SAVE phase: Violation!\` ).
      WHEN 9.
        oref->meth\_complete( ).
        out->write( \`Calling API classified with \` &&
        \`IF\_ABAP\_TX\_COMPLETE (no transactional context set): Ok!\` ).
        "if\_abap\_tx\_read
      WHEN 10.
        cl\_abap\_tx=>modify( ).
        oref->meth\_read( ).
        out->write( \`Calling API classified with \` &&
        \`IF\_ABAP\_TX\_READ in MODIFY phase: Ok!\` ).
      WHEN 11.
        cl\_abap\_tx=>save( ).
        oref->meth\_read( ).
        out->write( \`Calling API classified with \` &&
        \`IF\_ABAP\_TX\_READ in SAVE phase: Ok!\` ).
        "if\_abap\_tx\_modify
      WHEN 12.
        cl\_abap\_tx=>modify( ).
        oref->meth\_modify( ).
        out->write( \`Calling API classified with \` &&
        \`IF\_ABAP\_TX\_MODIFY in MODIFY phase: Ok!\` ).
      WHEN 13.
        cl\_abap\_tx=>save( ).
        oref->meth\_modify( ).
        out->write( \`Calling API classified with \` &&
        \`IF\_ABAP\_TX\_MODIFY in SAVE phase: Violation!\` ).
        "if\_abap\_tx\_save
      WHEN 14.
        cl\_abap\_tx=>modify( ).
        oref->meth\_save( ).
        out->write( \`Calling API classified with \` &&
        \`IF\_ABAP\_TX\_SAVE in MODIFY phase: Violation!\` ).
      WHEN 15.
        cl\_abap\_tx=>save( ).
        oref->meth\_save( ).
        out->write( \`Calling API classified with \` &&
        \`IF\_ABAP\_TX\_SAVE in SAVE phase: Ok!\` ).
        "if\_abap\_tx\_functional
      WHEN 16.
        cl\_abap\_tx=>modify( ).
        oref->meth\_functional( ).
        out->write( \`Calling API classified with \` &&
        \`IF\_ABAP\_TX\_FUNCTIONAL in MODIFY phase: Ok!\` ).
      WHEN 17.
        cl\_abap\_tx=>save( ).
        oref->meth\_functional( ).
        out->write( \`Calling API classified with \` &&
        \`IF\_ABAP\_TX\_FUNCTIONAL in SAVE phase: Ok!\` ).
        "if\_abap\_tx\_surface
      WHEN 18.
        cl\_abap\_tx=>modify( ).
        oref->meth\_surface( ).
        out->write( \`Calling API classified with \` &&
        \`IF\_ABAP\_TX\_SURFACE in MODIFY phase: Violation!\` ).
      WHEN 19.
        cl\_abap\_tx=>save( ).
        oref->meth\_surface( ).
        out->write( \`Calling API classified with \` &&
        \`IF\_ABAP\_TX\_SURFACE in SAVE phase: Violation!\` ).
      WHEN OTHERS.
        out->write( \`Enter one of the prededfined numbers.\` ).
    ENDCASE.
  ENDMETHOD.
  METHOD get\_html.
    html =
    \`<p>For testing the effect of setting the transactional \` &&
    \`phase explicitly using the methods MODIFY and SAVE  \` &&
    \`of the class CL\_ABAP\_TX, \` &&
    \`enter one of the following numbers (note that "Violation" \` &&
    \`can mean a runtime error.:</p>\` &&
    \`<table>\` &&
    \`<tbody style="font-size: 11px";>\` &&
    \`<tr><th>Number</th>\` &&
    \`<th>Phase</th>\` &&
    \`<th>What is executed</th>\` &&
    \`<th>Expected Result</th></tr>\` &&
    \`<tr><td>1</td><td>MODIFY</td><td>RAP create operation\` &&
    \`</td><td>Ok</td></tr>\` &&
    \`<tr><td>2</td><td>MODIFY</td><td>ABAP SQL \` &&
    \`database modification</td><td>Violation</td></tr>\` &&
    \`<tr><td>3</td><td>MODIFY</td><td>Commit</td>\` &&
    \`<td>Violation</td></tr>\` &&
    \`<tr><td>4</td><td>SAVE</td><td>ABAP SQL database \` &&
    \`modification</td><td>Ok</td></tr>\` &&
    \`<tr><td>5</td><td>SAVE</td><td>Commit</td>\` &&
    \`<td>Violation</td></tr>\` &&
    \`<tr><td>6</td><td>SAVE</td><td>RAP create operation\` &&
    \`</td><td>Violation</td></tr>\` &&
    \`<tr><td>7</td><td>MODIFY</td><td>Calling API tagged with \` &&
    \`IF\_ABAP\_TX\_COMPLETE</td>\` &&
    \`<td>Violation</tr>\` &&
    \`<tr><td>8</td><td>SAVE</td><td>Calling API tagged with \` &&
    \`IF\_ABAP\_TX\_COMPLETE</td><td>Violation</tr>\` &&
    \`<tr><td>9</td><td>No phase set</td><td>Calling API \` &&
    \`tagged with IF\_ABAP\_TX\_COMPLETE\` &&
    \`</td><td>Ok</tr>\` &&
    \`<tr><td>10</td><td>MODIFY</td><td>Calling API tagged with \` &&
    \`IF\_ABAP\_TX\_READ</td><td>Ok</tr>\` &&
    \`<tr><td>11</td><td>SAVE</td><td>Calling API tagged with \` &&
    \`IF\_ABAP\_TX\_READ</td><td>Ok</tr>\` &&
    \`<tr><td>12</td><td>MODIFY</td><td>Calling API tagged with \` &&
    \`IF\_ABAP\_TX\_MODIFY</td><td>Ok</tr>\` &&
    \`<tr><td>13</td><td>SAVE</td><td>Calling API tagged with \` &&
    \`IF\_ABAP\_TX\_MODIFY</td><td>Violation</tr>\` &&
    \`<tr><td>14</td><td>MODIFY</td><td>Calling API tagged with \` &&
    \`IF\_ABAP\_TX\_SAVE</td><td>Violation</tr>\` &&
    \`<tr><td>15</td><td>SAVE</td><td>Calling API tagged with \` &&
    \`IF\_ABAP\_TX\_SAVE</td><td>Ok</tr>\` &&
    \`<tr><td>16</td><td>MODIFY</td><td>Calling API tagged with \` &&
    \`IF\_ABAP\_TX\_FUNCTIONAL</td><td>Ok</tr>\` &&
    \`<tr><td>17</td><td>SAVE</td><td>Calling API tagged with \` &&
    \`IF\_ABAP\_TX\_FUNCTIONAL</td><td>Ok</tr>\` &&
    \`<tr><td>18</td><td>MODIFY</td><td>Calling API tagged with \` &&
    \`IF\_ABAP\_TX\_SURFACE</td><td>Violation</tr>\` &&
    \`<tr><td>19</td><td>SAVE</td><td>Calling API tagged with \` &&
    \`IF\_ABAP\_TX\_SURFACE</td><td>Violation</tr>\` &&
    \`</tbody>\` &&
    \`</table>\`.
  ENDMETHOD.
ENDCLASS.

Description   

The example is executed based on an input parameter. For the details, see the code and the descriptions in the popup that is displayed when running the example.