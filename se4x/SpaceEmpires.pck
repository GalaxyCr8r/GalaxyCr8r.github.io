GDPC                                                                                <   res://.import/icon.png-487276ed1e3a0c39cad0279d744ee560.stex@H      �      �p��<f��r�g��.�(   res://EconPhase/Income/10CpMineral.tscn @      9      ���L�١�Ќp��hx(   res://EconPhase/Income/1CpColonyRow.tscn�	      �       ��Ĺ�0hjO�����(   res://EconPhase/Income/3CpColonyRow.tscn0
      �       ����(���8��P��P0(   res://EconPhase/Income/5CpColonyRow.tscn       �       ђGCbV�z���_�ņ(   res://EconPhase/Income/5CpMineral.tscn        �       �J*;�0���i$��>�0   res://EconPhase/Income/HWStatusLabel.gd.remap   `X      9       �q��B�����y ���(   res://EconPhase/Income/HWStatusLabel.gdc       �      :R�^,�Ô�$�B!Z�4   res://EconPhase/Income/HomeworldStatusRow.gd.remap  �X      >       '�<�J�NzQ����D0   res://EconPhase/Income/HomeworldStatusRow.gdc   �      8      ���`���L��9�i0   res://EconPhase/Income/HomeworldStatusRow.tscn  �      �      ���@����@yt��N?   res://Global.gd.remap   �X      !       z�<��z]
����*Xn   res://Global.gdc`      Z      p)��F�FY��6�Ũ   res://Main.tscn �            ���$��E?��j�k>�c   res://TurnMenus.tscn�            �?�7�5r���	�|�    res://Utility/IncomeRow.gd.remapY      ,       G��;]��w�����    res://Utility/IncomeRow.gdc �-      4      I�ƺJc�4�s���ҽ   res://Utility/IncomeRow.tscn 0      �      ޭ�2��<.Ͷ�Pc0$   res://Utility/ScrollBarRow.gd.remap @Y      /       )�b��8� ��Je    res://Utility/ScrollBarRow.gdc  �3      T      PnR��U@�5��_��a    res://Utility/ScrollBarRow.tscn 09      T      ˅�XLЦ��$?4$   res://Utility/TurnOrderBidRow.tscn  �=      �       z���X7��~�J��$   res://Utility/UpDownButton.gd.remap pY      /       �- �-�\C�g�M    res://Utility/UpDownButton.gdc  @>            h�?��AE"�����    res://Utility/UpDownButton.tscn `D      #      �kj@�Ru�K6�	��   res://default_env.tres  �G      �       K��+fr��s����   res://icon.png  �Y      i      ����󈘥Ey��
�   res://icon.png.import   �U      �      �����%��(#AB�   res://project.binaryg      2      h7婕����ǚ�[1V[gd_scene load_steps=2 format=2]

[ext_resource path="res://Utility/IncomeRow.tscn" type="PackedScene" id=1]


[node name="10CpMineral" index="0" instance=ExtResource( 1 )]

[node name="Type" parent="." index="0"]
margin_right = 40.0
text = "10 CP:"

[node name="Amount" parent="." index="1"]
margin_left = 44.0

       [gd_scene load_steps=2 format=2]

[ext_resource path="res://Utility/IncomeRow.tscn" type="PackedScene" id=1]


[node name="1CpColonyRow" index="0" instance=ExtResource( 1 )]

 [gd_scene load_steps=2 format=2]

[ext_resource path="res://Utility/IncomeRow.tscn" type="PackedScene" id=1]



[node name="3CpColonyRow" index="0" instance=ExtResource( 1 )]

[node name="Type" parent="." index="0"]
text = "3 CP:"

        [gd_scene load_steps=2 format=2]

[ext_resource path="res://Utility/IncomeRow.tscn" type="PackedScene" id=1]



[node name="5CpColonyRow" index="0" instance=ExtResource( 1 )]

[node name="Type" parent="." index="0"]
text = "5 CP:"

        [gd_scene load_steps=2 format=2]

[ext_resource path="res://Utility/IncomeRow.tscn" type="PackedScene" id=1]


[node name="5CpMineral" index="0" instance=ExtResource( 1 )]

[node name="Type" parent="." index="0"]
text = "5 CP:"

           GDSC            5      ����ڶ��   �����϶�    ���������������������������Ҷ���   ����Ӷ��   ���¶���              CP       Dead                                                    	      
                                             #      ,      /      3      3YYYYYYY0�  PQV�  -YYYYYYY0�  P�  QV�  &�  V�  �  �6  P�  Q�  �  (V�  �  �  Y`          GDSC            ,      ����������������   �����������ڶ���   ��������Ӷ��   ����Ӷ��   �����������Ӷ���   ���¶���              CP       DEAD                                     "      *      3YY0�  P�  V�  QV�  &�  V�  T�  T�  �6  P�  Q�  �  (V�  T�  T�  �  Y`        [gd_scene load_steps=3 format=2]

[ext_resource path="res://Utility/ScrollBarRow.tscn" type="PackedScene" id=1]
[ext_resource path="res://EconPhase/Income/HomeworldStatusRow.gd" type="Script" id=2]

[node name="HomeworldStatusRow" instance=ExtResource( 1 )]
script = ExtResource( 2 )

[node name="CurrentValue" parent="." index="0"]
margin_left = 0.0
margin_right = 40.0
text = "20 CP "

[node name="ScrollBar" parent="." index="1"]
margin_left = 44.0
margin_right = 144.0
max_value = 20.0
step = 5.0
value = 20.0

[node name="UpDownButton" parent="." index="2"]
margin_left = 148.0
margin_right = 211.0
value = 20
max_value = 20
step = 5

GDSC            0      ���Ӷ���   ���������������   ����������ƶ   ���������϶�   ���������������Ҷ���   ���������������Ӷ���   �����϶�                                
                              $   	   %   
   &      ,      .      3YY8;�  VYY;�  V�  Y;�  NOY;�  V�  Y5;�  V�  YYY0�  PQV�  -Y`      [gd_scene load_steps=2 format=2]

[ext_resource path="res://TurnMenus.tscn" type="PackedScene" id=1]

[node name="MainScreen" type="VBoxContainer"]
anchor_right = 1.0
anchor_bottom = 1.0

[node name="VBoxContainer" type="VBoxContainer" parent="."]
margin_right = 240.0
margin_bottom = 320.0
size_flags_horizontal = 3
size_flags_vertical = 3

[node name="TurnMenus" parent="VBoxContainer" instance=ExtResource( 1 )]
anchor_right = 0.0
anchor_bottom = 0.0
margin_right = 240.0
margin_bottom = 284.0
size_flags_vertical = 3

[node name="HBoxContainer" type="HBoxContainer" parent="VBoxContainer"]
margin_top = 288.0
margin_right = 240.0
margin_bottom = 320.0
rect_min_size = Vector2( 0, 32 )
alignment = 1

[node name="Label" type="Label" parent="VBoxContainer/HBoxContainer"]
margin_top = 9.0
margin_right = 190.0
margin_bottom = 23.0
size_flags_horizontal = 3
text = "Current CP: 0"

[node name="Button" type="Button" parent="VBoxContainer/HBoxContainer"]
margin_left = 194.0
margin_right = 240.0
margin_bottom = 32.0
text = "Done"

        [gd_scene load_steps=8 format=2]

[ext_resource path="res://EconPhase/Income/HomeworldStatusRow.tscn" type="PackedScene" id=1]
[ext_resource path="res://EconPhase/Income/1CpColonyRow.tscn" type="PackedScene" id=2]
[ext_resource path="res://EconPhase/Income/3CpColonyRow.tscn" type="PackedScene" id=3]
[ext_resource path="res://EconPhase/Income/5CpColonyRow.tscn" type="PackedScene" id=4]
[ext_resource path="res://EconPhase/Income/5CpMineral.tscn" type="PackedScene" id=5]
[ext_resource path="res://EconPhase/Income/10CpMineral.tscn" type="PackedScene" id=6]
[ext_resource path="res://Utility/TurnOrderBidRow.tscn" type="PackedScene" id=7]

[node name="TurnMenus" type="Control"]
anchor_right = 1.0
anchor_bottom = 1.0

[node name="TabContainer" type="TabContainer" parent="."]
anchor_right = 1.0
anchor_bottom = 1.0

[node name="Income" type="Tabs" parent="TabContainer"]
anchor_right = 1.0
anchor_bottom = 1.0
margin_left = 4.0
margin_top = 32.0
margin_right = -4.0
margin_bottom = -4.0

[node name="MarginContainer" type="MarginContainer" parent="TabContainer/Income"]
anchor_right = 1.0
anchor_bottom = 1.0
margin_left = 20.0
margin_top = 10.0
margin_right = -20.0

[node name="IncomeSources" type="VBoxContainer" parent="TabContainer/Income/MarginContainer"]
margin_right = 211.0
margin_bottom = 274.0
custom_constants/separation = 13

[node name="Homeworld" type="VBoxContainer" parent="TabContainer/Income/MarginContainer/IncomeSources"]
margin_right = 211.0
margin_bottom = 38.0

[node name="HWStatusLabel" type="Label" parent="TabContainer/Income/MarginContainer/IncomeSources/Homeworld"]
margin_right = 211.0
margin_bottom = 14.0
text = "Homeworld Status:"
align = 1

[node name="HomeworldStatusRow" parent="TabContainer/Income/MarginContainer/IncomeSources/Homeworld" instance=ExtResource( 1 )]
margin_right = 211.0
value = 20

[node name="Colonies" type="VBoxContainer" parent="TabContainer/Income/MarginContainer/IncomeSources"]
margin_top = 51.0
margin_right = 211.0
margin_bottom = 137.0

[node name="Title" type="Label" parent="TabContainer/Income/MarginContainer/IncomeSources/Colonies"]
margin_right = 211.0
margin_bottom = 14.0
text = "Income-producing Colonies:"
align = 1

[node name="1CpColonyRow" parent="TabContainer/Income/MarginContainer/IncomeSources/Colonies" instance=ExtResource( 2 )]
margin_right = 211.0

[node name="3CpColonyRow" parent="TabContainer/Income/MarginContainer/IncomeSources/Colonies" instance=ExtResource( 3 )]
margin_top = 42.0
margin_right = 211.0
margin_bottom = 62.0

[node name="5CpColonyRow" parent="TabContainer/Income/MarginContainer/IncomeSources/Colonies" instance=ExtResource( 4 )]
margin_top = 66.0
margin_right = 211.0
margin_bottom = 86.0

[node name="Minerals" type="VBoxContainer" parent="TabContainer/Income/MarginContainer/IncomeSources"]
editor/display_folded = true
margin_top = 150.0
margin_right = 211.0
margin_bottom = 229.0
size_flags_vertical = 3

[node name="Label" type="Label" parent="TabContainer/Income/MarginContainer/IncomeSources/Minerals"]
margin_right = 211.0
margin_bottom = 14.0
text = "Minerals Collected:"
align = 1

[node name="5CpMineral" parent="TabContainer/Income/MarginContainer/IncomeSources/Minerals" instance=ExtResource( 5 )]
margin_right = 211.0

[node name="10CpMineral" parent="TabContainer/Income/MarginContainer/IncomeSources/Minerals" instance=ExtResource( 6 )]
margin_top = 42.0
margin_right = 211.0
margin_bottom = 62.0

[node name="Misc" type="HBoxContainer" parent="TabContainer/Income/MarginContainer/IncomeSources"]
margin_top = 242.0
margin_right = 211.0
margin_bottom = 274.0

[node name="CarryOver" type="VBoxContainer" parent="TabContainer/Income/MarginContainer/IncomeSources/Misc"]
margin_right = 103.0
margin_bottom = 32.0
size_flags_horizontal = 3

[node name="Title" type="Label" parent="TabContainer/Income/MarginContainer/IncomeSources/Misc/CarryOver"]
margin_right = 103.0
margin_bottom = 14.0
text = "Carry-Over:"
align = 1

[node name="Amount" type="Label" parent="TabContainer/Income/MarginContainer/IncomeSources/Misc/CarryOver"]
margin_top = 18.0
margin_right = 103.0
margin_bottom = 32.0
text = "0"
align = 1

[node name="SubTotal" type="VBoxContainer" parent="TabContainer/Income/MarginContainer/IncomeSources/Misc"]
margin_left = 107.0
margin_right = 211.0
margin_bottom = 32.0
size_flags_horizontal = 3

[node name="Title" type="Label" parent="TabContainer/Income/MarginContainer/IncomeSources/Misc/SubTotal"]
margin_right = 104.0
margin_bottom = 14.0
text = "Sub-Total:"
align = 1

[node name="Amount" type="Label" parent="TabContainer/Income/MarginContainer/IncomeSources/Misc/SubTotal"]
margin_top = 18.0
margin_right = 104.0
margin_bottom = 32.0
text = "0"
align = 1

[node name="Expense" type="Tabs" parent="TabContainer"]
visible = false
anchor_right = 1.0
anchor_bottom = 1.0
margin_left = 4.0
margin_top = 32.0
margin_right = -4.0
margin_bottom = -4.0

[node name="VBoxContainer" type="VBoxContainer" parent="TabContainer/Expense"]
anchor_right = 1.0
anchor_bottom = 1.0

[node name="VBoxContainer" type="VBoxContainer" parent="TabContainer/Expense/VBoxContainer"]
margin_right = 232.0
margin_bottom = 38.0

[node name="Label" type="Label" parent="TabContainer/Expense/VBoxContainer/VBoxContainer"]
margin_right = 232.0
margin_bottom = 14.0
text = "Turn Order Bid:"
align = 1

[node name="TurnOrderBidRow" parent="TabContainer/Expense/VBoxContainer/VBoxContainer" instance=ExtResource( 7 )]
margin_right = 232.0

[node name="Summary" type="Tabs" parent="TabContainer"]
visible = false
anchor_right = 1.0
anchor_bottom = 1.0
margin_left = 4.0
margin_top = 32.0
margin_right = -4.0
margin_bottom = -4.0

         GDSC            X      ������������Ķ��   ������������   ����Ӷ��   ��������Ӷ��   ��������Ӷ��   �����¶�   ����ڶ��   �����¶�   �����ض�   �����������ض���   ��������Ӷ��    �����������������������������Ҷ�   ���¶���                                                  %      &   	   /   
   3      :      ;      C      F      G      N      3Y2�  YY8;�  V�  9�  R�  YY5;�  V�  W�  Y5;�  V�	  W�	  YY0�  P�
  V�  QV�  �  �
  �  �  T�  P�
  QYY0�  PQX�  V�  .�  YY0�  P�
  QV�  �  T�  �6  P�
  Q`            [gd_scene load_steps=5 format=2]

[ext_resource path="res://Utility/IncomeRow.gd" type="Script" id=1]
[ext_resource path="res://Utility/UpDownButton.tscn" type="PackedScene" id=2]

[node name="IncomeRow" type="HBoxContainer"]
margin_top = 18.0
margin_right = 192.0
margin_bottom = 38.0
script = ExtResource( 1 )

[node name="Type" type="Label" parent="."]
margin_top = 3.0
margin_right = 48.0
margin_bottom = 17.0
rect_min_size = Vector2( 48, 0 )
text = "1 CP:"
align = 1

[node name="Amount" type="Label" parent="."]
margin_left = 52.0
margin_top = 3.0
margin_right = 125.0
margin_bottom = 17.0
rect_min_size = Vector2( 32, 0 )
size_flags_horizontal = 3
text = "0"
align = 1

[node name="UpDownButton" parent="." instance=ExtResource( 2 )]
anchor_right = 0.0
margin_left = 129.0
margin_right = 192.0
margin_bottom = 20.0
max_value = 256

[connection signal="value_changed" from="UpDownButton" to="." method="_on_UpDownButton_value_changed"]
  GDSC         /   �      ������������Ķ��   ����������������   ����Ӷ��   ��������Ӷ��   ��������Ӷ��   �����������Ӷ���   ����ڶ��   �����������Ӷ���   ��������Ķ��   ��������Ķ��   �����ض�   �����������ض���   ��������϶��   �����϶�   ��������Ӷ��   �����������ڶ���   ������������Ӷ��   ������ζ   ��������Ӷ��   ���¶���    ����������������������������Ҷ��    �����������������������������Ҷ�                                                              %      .   	   /   
   6      7      8      >      B      H      N      O      X      \      a      c      i      o      t      u      }      �      �      �      �      �       �   !   �   "   �   #   �   $   �   %   �   &   �   '   �   (   �   )   �   *   �   +   �   ,   �   -   �   .   �   /   3Y2�  YY8;�  V�  9�  R�  YY5;�  V�  W�  Y5;�  V�	  W�	  Y5;�
  V�  W�  YY;�  V�  �  YYY0�  PQV�  �  �  �  �  T�  �  �  �
  T�  �  YY0�  P�  V�  QV�  �  �  �  &�  V�  .�  �
  T�  �  �  �  T�  �  �  �  P�  QYY0�  PQX�  V�  .�  YY0�  P�  V�  QV�  &�  �  V�  �  P�  Q�  �
  T�  �  �  �  T�  �  YY0�  P�  V�  QV�  �  T�  �6  P�  QYY0�  P�  V�  QV�  �  �  �  �
  T�  �  �  �  P�  QYY0�  P�  V�  QV�  �  �  �  �  T�  �  �  �  P�  QY`            [gd_scene load_steps=3 format=2]

[ext_resource path="res://Utility/ScrollBarRow.gd" type="Script" id=1]
[ext_resource path="res://Utility/UpDownButton.tscn" type="PackedScene" id=2]

[node name="ScrollBarRow" type="HBoxContainer"]
margin_top = 18.0
margin_right = 207.0
margin_bottom = 38.0
alignment = 1
script = ExtResource( 1 )
value = 0

[node name="CurrentValue" type="Label" parent="."]
margin_left = 6.0
margin_top = 3.0
margin_right = 30.0
margin_bottom = 17.0
rect_min_size = Vector2( 24, 0 )
text = "0"
align = 1

[node name="ScrollBar" type="HScrollBar" parent="."]
margin_left = 34.0
margin_top = 4.0
margin_right = 134.0
margin_bottom = 16.0
rect_min_size = Vector2( 100, 0 )
size_flags_vertical = 4
max_value = 255.0
step = 1.0

[node name="UpDownButton" parent="." instance=ExtResource( 2 )]
anchor_right = 0.0
margin_left = 138.0
margin_right = 201.0
margin_bottom = 20.0
max_value = 255

[connection signal="value_changed" from="ScrollBar" to="." method="_on_CPScrollBar_value_changed"]
[connection signal="value_changed" from="UpDownButton" to="." method="_on_UpDownButton_value_changed"]
            [gd_scene load_steps=2 format=2]

[ext_resource path="res://Utility/ScrollBarRow.tscn" type="PackedScene" id=1]

[node name="TurnOrderBidRow" instance=ExtResource( 1 )]

      GDSC         <        ������������Ķ��   �����������ض���   ������������Ҷ��   ��������Ӷ��   ����Ӷ��   ��������Ӷ��   ��������Ӷ��   ��������Ӷ��   ��������Ӷ��   ���ƶ���   ����Ŷ��   �����ض�   ����������ض   ���Ŷ���   ���������ض�   �����������Ӷ���   ��������϶��   �����϶�   ������������������϶   �����������Ҷ���   ����������ڶ   ������������������������ƶ��   �����������������������ƶ���                                      value_changed                                                       	   #   
   +      3      4      5      >      G      O      P      W      X      Y      _      c      g      h      q      u      y      z      �      �      �       �   !   �   "   �   #   �   $   �   %   �   &   �   '   �   (   �   )   �   *   �   +   �   ,   �   -   �   .   �   /   �   0   �   1   �   2   �   3   �   4   �   5   �   6   �   7   �   8   �   9   �   :   �   ;     <   3Y2�  YYYB�  P�  QYYY8;�  V�  9�  R�  Y8;�  V�  Y8;�  V�  �  Y8;�	  V�  �  YYY5;�
  V�  W�  Y5;�  V�  W�  Y5;�  V�  �  YY;�  V�  �  YYY0�  PQV�  �  �  �  �  PQYY0�  P�  V�  QV�  �  �  �  �  PQYY0�  PQX�  V�  .�  YY0�  PQV�  &�  V�  .�  �  �
  T�  P�  Q�  �  T�  P�  Q�  &�  	�  V�  �  �  �  &�  �  V�  �
  T�  P�  Q�  �  &�  �  V�  �  �  �  &�  �  V�  �  T�  P�  Q�  �  &�  �  V�  �  P�  R�  Q�  �  �  YYY0�  PQV�  �  �	  �  �  PQYY0�  PQV�  �  �	  �  �  PQY`            [gd_scene load_steps=2 format=2]

[ext_resource path="res://Utility/UpDownButton.gd" type="Script" id=1]


[node name="UpDownButton" type="HBoxContainer"]
anchor_right = 1.0
margin_bottom = 35.0
rect_pivot_offset = Vector2( -370, -10 )
size_flags_vertical = 0
custom_constants/separation = 10
alignment = 1
script = ExtResource( 1 )

[node name="MinusButton" type="Button" parent="."]
margin_right = 115.0
margin_bottom = 35.0
size_flags_horizontal = 3
text = " - "

[node name="PlusButton" type="Button" parent="."]
margin_left = 125.0
margin_right = 240.0
margin_bottom = 35.0
size_flags_horizontal = 3
text = " + "

[connection signal="button_up" from="MinusButton" to="." method="_on_MinusButton_button_up"]
[connection signal="button_up" from="PlusButton" to="." method="_on_PlusButton_button_up"]
             [gd_resource type="Environment" load_steps=2 format=2]

[sub_resource type="ProceduralSky" id=1]

[resource]
background_mode = 2
background_sky = SubResource( 1 )

            GDST@   @           |  PNG �PNG

   IHDR   @   @   �iq�  ?IDATx��{pTU�����;�N7	�����%"fyN�8��r\]fEgةf���X�g��F�Y@Wp\]|,�D@��	$$���	��I�n���ҝt����JW�s��}�=���|�D(���W@T0^����f��	��q!��!i��7�C���V�P4}! ���t�ŀx��dB.��x^��x�ɏN��贚�E�2�Z�R�EP(�6�<0dYF���}^Ѡ�,	�3=�_<��(P&�
tF3j�Q���Q�B�7�3�D�@�G�U��ĠU=� �M2!*��[�ACT(�&�@0hUO�u��U�O�J��^FT(Qit �V!>%���9 J���jv	�R�@&��g���t�5S��A��R��OO^vz�u�L�2�����lM��>tH
�R6��������dk��=b�K�љ�]�י�F*W�볃�\m=�13� �Є,�ˏy��Ic��&G��k�t�M��/Q]�أ]Q^6o��r�h����Lʳpw���,�,���)��O{�:א=]� :LF�[�*���'/���^�d�Pqw�>>��k��G�g���No���\��r����/���q�̾��	�G��O���t%L�:`Ƶww�+���}��ݾ ۿ��SeŔ����  �b⾻ǰ��<n_�G��/��8�Σ�l]z/3��g����sB��tm�tjvw�:��5���l~�O���v��]ǚ��֩=�H	u���54�:�{"������}k����d���^��`�6�ev�#Q$�ήǞ��[�Ặ�e�e��Hqo{�59i˲����O+��e������4�u�r��z�q~8c
 �G���7vr��tZ5�X�7����_qQc�[����uR��?/���+d��x�>r2����P6����`�k��,7�8�ɿ��O<Ė��}AM�E%�;�SI�BF���}��@P�yK�@��_:����R{��C_���9������
M��~����i����������s���������6�,�c�������q�����`����9���W�pXW]���:�n�aұt~9�[���~e�;��f���G���v0ԣ� ݈���y�,��:j%gox�T
�����kְ�����%<��A`���Jk?���� gm���x�*o4����o��.�����逊i�L����>���-���c�����5L����i�}�����4����usB������67��}����Z�ȶ�)+����)+H#ۢ�RK�AW�xww%��5�lfC�A���bP�lf��5����>���`0ċ/oA-�,�]ĝ�$�峋P2/���`���;����[Y��.&�Y�QlM���ƌb+��,�s�[��S ��}<;���]�:��y��1>'�AMm����7q���RY%9)���ȡI�]>�_l�C����-z�� ;>�-g�dt5іT�Aͺy�2w9���d�T��J�}u�}���X�Ks���<@��t��ebL������w�aw�N����c����F���3
�2먭�e���PQ�s�`��m<1u8�3�#����XMڈe�3�yb�p�m��܇+��x�%O?CmM-Yf��(�K�h�بU1%?I�X�r��� ��n^y�U�����1�玒�6..e��RJrRz�Oc������ʫ��]9���ZV�\�$IL�OŨ��{��M�p�L56��Wy��J�R{���FDA@
��^�y�������l6���{�=��ή�V�hM�V���JK��:��\�+��@�l/���ʧ����pQ��������׷Q^^�(�T������|.���9�?I�M���>���5�f欙X�VƎ-f͚ո���9����=�m���Y���c��Z�̚5��k~���gHHR�Ls/l9²���+ ����:��杧��"9�@��ad�ŝ��ѽ�Y���]O�W_�`Ֆ#Դ8�z��5-N^�r�Z����h���ʆY���=�`�M���Ty�l���.	�/z��fH���������֗�H�9�f������G� ̛<��q��|�]>ں}�N�3�;i�r"�(2RtY���4X���F�
�����8 �[�\锰�b`�0s�:���v���2�f��k�Zp��Ω&G���=��6em.mN�o.u�fԐc��i����C���u=~{�����a^�UH������¡,�t(jy�Q�ɋ����5�Gaw��/�Kv?�|K��(��SF�h�����V��xȩ2St쯹���{6b�M/�t��@0�{�Ԫ�"�v7�Q�A�(�ľR�<	�w�H1D�|8�]�]�Ո%����jҢ꯸hs�"~꯸P�B�� �%I}}��+f�����O�cg�3rd���P�������qIڻ]�h�c9��xh )z5��� �ƾ"1:3���j���'1;��#U�失g���0I}�u3.)@�Q�A�ĠQ`I�`�(1h��t*�:�>'��&v��!I?�/.)@�S�%q�\���l�TWq�������լ�G�5zy6w��[��5�r���L`�^���/x}�>��t4���cݦ�(�H�g��C�EA�g�)�Hfݦ��5�;q-���?ư�4�����K����XQ*�av�F��������񵏷�;>��l�\F��Þs�c�hL�5�G�c�������=q�P����E �.���'��8Us�{Ǎ���#������q�HDA`b��%����F�hog���|�������]K�n��UJ�}������Dk��g��8q���&G����A�RP�e�$'�i��I3j�w8������?�G�&<	&䪬R��lb1�J����B$�9�꤮�ES���[�������8�]��I�B!
�T
L:5�����d���K30"-	�(��D5�v��#U�����jԔ�QR�GIaó�I3�nJVk���&'��q����ux��AP<�"�Q�����H�`Jң�jP(D��]�����`0��+�p�inm�r�)��,^�_�rI�,��H>?M-44���x���"� �H�T��zIty����^B�.��%9?E����П�($@H!�D��#m�e���vB(��t �2.��8!���s2Tʡ �N;>w'����dq�"�2����O�9$�P	<(��z�Ff�<�z�N��/yD�t�/?�B.��A��>��i%�ǋ"�p n� ���]~!�W�J���a�q!n��V X*�c �TJT*%�6�<d[�    IEND�B`�        [remap]

importer="texture"
type="StreamTexture"
path="res://.import/icon.png-487276ed1e3a0c39cad0279d744ee560.stex"
metadata={
"vram_texture": false
}

[deps]

source_file="res://icon.png"
dest_files=[ "res://.import/icon.png-487276ed1e3a0c39cad0279d744ee560.stex" ]

[params]

compress/mode=0
compress/lossy_quality=0.7
compress/hdr_mode=0
compress/bptc_ldr=0
compress/normal_map=0
flags/repeat=0
flags/filter=true
flags/mipmaps=false
flags/anisotropic=false
flags/srgb=2
process/fix_alpha_border=true
process/premult_alpha=false
process/HDR_as_SRGB=false
process/invert_color=false
stream=false
size_limit=0
detect_3d=true
svg/scale=1.0
[remap]

path="res://EconPhase/Income/HWStatusLabel.gdc"
       [remap]

path="res://EconPhase/Income/HomeworldStatusRow.gdc"
  [remap]

path="res://Global.gdc"
               [remap]

path="res://Utility/IncomeRow.gdc"
    [remap]

path="res://Utility/ScrollBarRow.gdc"
 [remap]

path="res://Utility/UpDownButton.gdc"
 �PNG

   IHDR   @   @   �iq�  0IDATx��}pTU����L����W�$�@HA�%"fa��Yw�)��A��Egةf���X�g˱��tQ���Eq�!�|K�@BHH:�t>�;�����1!ݝn�A�_UWw����{λ��sϽO�q汤��X,�q�z�<�q{cG.;��]�_�`9s��|o���:��1�E�V� ~=�	��ݮ����g[N�u�5$M��NI��-
�"(U*��@��"oqdYF�y�x�N�e�2���s����KҦ`L��Z)=,�Z}"
�A�n{�A@%$��R���F@�$m������[��H���"�VoD��v����Kw�d��v	�D�$>	�J��;�<�()P�� �F��
�< �R����&�կ��� ����������%�u̚VLNfڠus2�̚VL�~�>���mOMJ���J'R��������X����׬X�Ϲ虾��6Pq������j���S?�1@gL���±����(�2A�l��h��õm��Nb�l_�U���+����_����p�)9&&e)�0 �2{��������1���@LG�A��+���d�W|x�2-����Fk7�2x��y,_�_��}z��rzy��%n�-]l����L��;
�s���:��1�sL0�ڳ���X����m_]���BJ��im�  �d��I��Pq���N'�����lYz7�����}1�sL��v�UIX���<��Ó3���}���nvk)[����+bj�[���k�������cݮ��4t:= $h�4w:qz|A��٧�XSt�zn{�&��õmQ���+�^�j�*��S��e���o�V,	��q=Y�)hԪ��F5~����h�4 *�T�o��R���z�o)��W�]�Sm銺#�Qm�]�c�����v��JO��?D��B v|z�կ��܈�'�z6?[� ���p�X<-���o%�32����Ρz�>��5�BYX2���ʦ�b��>ǣ������SI,�6���|���iXYQ���U�҅e�9ma��:d`�iO����{��|��~����!+��Ϧ�u�n��7���t>�l捊Z�7�nвta�Z���Ae:��F���g�.~����_y^���K�5��.2�Zt*�{ܔ���G��6�Y����|%�M	���NPV.]��P���3�8g���COTy�� ����AP({�>�"/��g�0��<^��K���V����ϫ�zG�3K��k���t����)�������6���a�5��62Mq����oeJ�R�4�q�%|�� ������z���ä�>���0�T,��ǩ�����"lݰ���<��fT����IrX>� � ��K��q�}4���ʋo�dJ��م�X�sؘ]hfJ�����Ŧ�A�Gm߽�g����YG��X0u$�Y�u*jZl|p������*�Jd~qcR�����λ�.�
�r�4���zپ;��AD�eЪU��R�:��I���@�.��&3}l
o�坃7��ZX��O�� 2v����3��O���j�t	�W�0�n5����#è����%?}����`9۶n���7"!�uf��A�l܈�>��[�2��r��b�O�������gg�E��PyX�Q2-7���ʕ������p��+���~f��;����T	�*�(+q@���f��ϫ����ѓ���a��U�\.��&��}�=dd'�p�l�e@y��
r�����zDA@����9�:��8�Y,�����=�l�֮��F|kM�R��GJK��*�V_k+��P�,N.�9��K~~~�HYY��O��k���Q�����|rss�����1��ILN��~�YDV��-s�lfB֬Y�#.�=�>���G\k֬fB�f3��?��k~���f�IR�lS'�m>²9y���+ �v��y��M;NlF���A���w���w�b���Л�j�d��#T��b���e��[l<��(Z�D�NMC���k|Zi�������Ɗl��@�1��v��Щ�!曣�n��S������<@̠7�w�4X�D<A`�ԑ�ML����jw���c��8��ES��X��������ƤS�~�׾�%n�@��( Zm\�raҩ���x��_���n�n���2&d(�6�,8^o�TcG���3���emv7m6g.w��W�e
�h���|��Wy��~���̽�!c� �ݟO�)|�6#?�%�,O֫9y������w��{r�2e��7Dl �ׇB�2�@���ĬD4J)�&�$
�HԲ��
/�߹�m��<JF'!�>���S��PJ"V5!�A�(��F>SD�ۻ�$�B/>lΞ�.Ϭ�?p�l6h�D��+v�l�+v$Q�B0ūz����aԩh�|9�p����cƄ,��=Z�����������Dc��,P��� $ƩЩ�]��o+�F$p�|uM���8R��L�0�@e'���M�]^��jt*:��)^�N�@�V`�*�js�up��X�n���tt{�t:�����\�]>�n/W�\|q.x��0���D-���T��7G5jzi���[��4�r���Ij������p�=a�G�5���ͺ��S���/��#�B�EA�s�)HO`���U�/QM���cdz
�,�!�(���g�m+<R��?�-`�4^}�#>�<��mp��Op{�,[<��iz^�s�cü-�;���쾱d����xk瞨eH)��x@���h�ɪZNU_��cxx�hƤ�cwzi�p]��Q��cbɽcx��t�����M|�����x�=S�N���
Ͽ�Ee3HL�����gg,���NecG�S_ѠQJf(�Jd�4R�j��6�|�6��s<Q��N0&Ge
��Ʌ��,ᮢ$I�痹�j���Nc���'�N�n�=>|~�G��2�)�D�R U���&ՠ!#1���S�D��Ǘ'��ೃT��E�7��F��(?�����s��F��pC�Z�:�m�p�l-'�j9QU��:��a3@0�*%�#�)&�q�i�H��1�'��vv���q8]t�4����j��t-}IـxY�����C}c��-�"?Z�o�8�4Ⱦ���J]/�v�g���Cȷ2]�.�Ǣ ��Ս�{0
�>/^W7�_�����mV铲�
i���FR��$>��}^��dُ�۵�����%��*C�'�x�d9��v�ߏ � ���ۣ�Wg=N�n�~������/�}�_��M��[���uR�N���(E�	� ������z��~���.m9w����c����
�?���{�    IEND�B`�       ECFG      _global_script_classes�                    class      	   IncomeRow         language      GDScript      path      res://Utility/IncomeRow.gd        base      HBoxContainer               class         ScrollBarRow      language      GDScript      path      res://Utility/ScrollBarRow.gd         base      HBoxContainer               class         UpDownButton      language      GDScript      path      res://Utility/UpDownButton.gd         base      HBoxContainer      _global_script_class_icons\            	   IncomeRow                ScrollBarRow             UpDownButton          application/config/name          SpaceEmpires4x Helper      application/run/main_scene         res://Main.tscn    application/config/icon         res://icon.png     display/window/size/width      �      display/window/size/height      @  #   display/window/handheld/orientation         portrait   display/window/stretch/mode         viewport   display/window/stretch/aspect         expand  $   rendering/quality/driver/driver_name         GLES2   %   rendering/vram_compression/import_etc         &   rendering/vram_compression/import_etc2          )   rendering/environment/default_environment          res://default_env.tres                GDPC